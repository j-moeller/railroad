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
import { Component, OnInit } from '@angular/core';

import { ContextMenuStatus } from './contextmenu/contextmenu.interface';
import { RailroadService, Railroad, Station } from './railroad.service';

@Component({
	selector: 'ee-railroad',
	styles: [`
		ee-railroad-svg {
			width: 100%;
			height: 100%;
			display: block;
		}

		svg {
			width: 100%;
			height: 100%;
			border: 1px solid #000;
		}

		svg.dragging {
			cursor: grabbing;
		}

		.railroad {
			flex-direction: column;
			height: 100%;
		}

		.railroad > .main {
			flex-direction: row;
		}

		.railroad, .main, .window, .stations, .stations > div {
			display: flex;
			flex: 1;
		}

		.stations > div {
			justify-content: center;
			min-width: 100px;
		}

		.header {
			height: 30px;
		}

		.side {
			width: 30px;
		}

		span.zoomlevel {
			position:absolute;
			top:0px;
		}

		span.zoomlevel:hover {
			display:none;
		}

		.sides .header rect {
			width: 100%;
			height: 30px;
			fill: grey;
		}

		.track {
			fill: transparent;
			stroke: black;
			stroke-width: 2;
		}
	`],
	template: `
	<div class="railroad">
		<div class="header">
			<div class="stations">
				<div *ngFor="let station of stations">{{station}}</div>
			</div>
		</div>
		<div class="main">
			<div class="left side"></div>
			<div class="window">
				<ee-railroad-svg
					[railroad]="railroad"
					[stations]="stations"
					[zoomborder]="zoomborder"
					[(zoomlevel)]="zoomlevel"
					[(translate)]="translate">
				</ee-railroad-svg>
			</div>
			<div class="right side"></div>
		</div>
		<div class="footer">
			<input type="text" [(ngModel)]="zoomlevel">
			<input type="text" [(ngModel)]="translate[0]">
			<input type="text" [(ngModel)]="translate[1]">
			<span id="abc"></span>
			<span id="xyz"></span>
			<slider [(value)]="zoomlevel" [min]="zoomborder[0]" [max]="zoomborder[1]"></slider>
		</div>
	</div>
	`,
	providers: [RailroadService]
})

export class RailroadComponent implements OnInit {
	zoomlevel: number = 1;
	zoomborder: [number, number] = [0.05, 100000];
	translate: [number, number] = [0, 0];
	border: [[number, number], [number, number]] = [[0,0], [100,100]];

	railroad: Railroad;
	stations: Station[];

	constructor(private rs: RailroadService) { }

	ngOnInit() {
		this.railroad = this.rs.getRailroad();
		this.stations = this.rs.getAllStations();
	}
}