/*
 * Copyright Siemens AG, 2016
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *
 * @author Jonas Möller
 */
import { Component, OnInit, HostListener, DoCheck, Inject, ElementRef, ViewChild, Renderer } from '@angular/core';

import { ContextMenuStatus } from './zui/contextmenu/contextmenu.interface';
import { CoordinateInterface } from './zui/coordinate.interface';
import { RailroadService } from './railroad.service';
import { Timetable, StopOrPass, PartialTrip } from './timetable.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

var svgNS = "http://www.w3.org/2000/svg";

@Component({
	selector: 'ee-railroad',
	styles: [`
		.railroad {
			display: flex;
			flex: 1;
			height: 100%;
		}

		.svg-content-y-stationary rect, .svg-content-stationary rect {
			fill: white;
		}

		line {
			stroke: black;
		}

		line:hover {
			cursor: pointer;
		}

		text {
			user-select: none;
			fill: black;
		}

		context-menu {
			position: absolute;
			top: 0px;
		}
	`],
	template: `
	<div class="railroad">
		<ee-zui-transform
			[(zoom)]="zoom"
			[(translate)]="translate"
			[padding]="padding"
			[border]="border"
			[contextMenu]="contextMenu"
			(onResize)="updateSize($event)"
			[contextMenu]="contextMenu"
			[contextMenuId]="'Transform-SVG'"
			[items]="['ShowX', 'HideX', 'ShowY', 'HideY']"
			contextable>
			<svg:g class="background">
				<svg:defs>
					<svg:pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
						<svg:path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
					</svg:pattern>
					<svg:pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
						<svg:rect width="100" height="100" fill="url(#smallGrid)"/>
						<svg:path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"/>
					</svg:pattern>
				</svg:defs>
			</svg:g>

			<svg:g *ngIf="timetable" class="partialTrips"
				[pts]="timetable.partialTrips.all"
				[border]="border"
				partialTrips>
			</svg:g>

			<svg:g *ngIf="timetable" class="stopOrPasss"
				[sop]="timetable.stopOrPasss.all"
				[border]="border"
				stopOrPasss>
			</svg:g>

			<svg:g *ngIf="timetable && showX" class="svg-content-y-stationary">
				<svg:g *ngFor="let station of timetable.stations; let i = index">
					<svg:text
						[attr.x]="coord.getX(station)"
						[attr.y]="24 / zoom"
						[attr.font-size]="20 / zoom">
						{{station}}
					</svg:text>
					<svg:line
						[attr.x1]="coord.getX(station)"
						[attr.y1]="padding[0] / zoom"
						[attr.x2]="coord.getX(station)"
						[attr.y2]="svgSize[1] / zoom"
						vector-effect="non-scaling-stroke">
					</svg:line>
				</svg:g>
			</svg:g>

			<svg:g *ngIf="showY" class="svg-content-x-stationary">
				<svg:g svg-time-axis
					[border]="border"
					[padding]="padding"
					[translate]="translate"
					[zoom]="zoom"
					[svgSize]="svgSize"
					[contentSize]="contentSize">
				</svg:g>
			</svg:g>
		</ee-zui-transform>
		<context-menu [contextMenu]="contextMenu" (select)="onSelect($event)"></context-menu>
	</div>
	`
})

export class RailroadComponent implements OnInit {
	border: [[number, number], [number, number]] = [[0,0],[2100,5000]];
	padding: [number, number, number, number] = [30,0,0,75];
	translate: [number, number] = [0,0];
	zoom: number = 1;

	timetable: Timetable;
	svgSize: [number, number];
	contentSize: [number, number];

	showX: boolean = true;
	showY: boolean = true;

	partialTrip: any = {};

	contextMenu: ContextMenuStatus = {
		id: "",
		show: false,
		items: [],
		x: 0,
		y: 0,
		target: null
	};

	constructor(
		private rs: RailroadService,
		@Inject('CoordinateInterface') private coord: CoordinateInterface<string, Date>
	) { }

	ngOnInit() {
		this.rs.getTimetable().subscribe(tt => {
			this.timetable = tt;

			tt.partialTrips.all.forEach(partialTrip => {
				partialTrip.stopOrPasss.sort((a, b) => {
					return this.coord.getX(a.stationName) - this.coord.getX(b.stationName);
				});
			});
		});
	}

	updateSize(newSize: [[number, number],[number, number]]) {
		this.svgSize = newSize[0];
		this.contentSize = newSize[1];
	}

	onSelect(s: any) {
		console.log(s);
		if (s.item === "ShowX") {
			this.showX = true;
		}
		if (s.item === "HideX") {
			this.showX = false;
		}
		if (s.item === "ShowY") {
			this.showY = true;
		}
		if (s.item === "HideY") {
			this.showY = false;
		}
	}
}
