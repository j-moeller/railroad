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
import {
	Component,
	OnChanges,
	Input,
	Output,
	EventEmitter,
	HostListener,
	ChangeDetectionStrategy
} from '@angular/core';

import { ZUITransformService } from './zui-transform.service';
import { Border, Coordinate, Padding } from './types.model';

@Component({
	selector: '[ee-svg-scrollbar]',
	styles: [`
		.scrollbar {
			cursor: pointer;
			fill: rgba(166,166,166,0.8);
		}

		.scrollbar.vertical {
			width: 8px;
			transition: width 100ms;
		}

		.scrollbar.vertical:hover, .scrollbar.vertical.dragging {
			width: 12px;
		}

		.scrollbar.horizontal {
			height: 8px;
			transition: height 100ms;
		}

		.scrollbar.horizontal:hover, .scrollbar.horizontal.dragging {
			height: 12px;
		}
	`],
	template: `
		<svg:g *ngIf="border">
			<svg:rect *ngIf="horizontal && size != contentSize.x" class="scrollbar horizontal"
				[ngClass]="{'dragging': dragging}"
				[attr.x]="position + padding.left"
				[attr.y]="positionOffset"
				[attr.width]="size"
			/>
			<svg:rect *ngIf="!horizontal && size != contentSize.y" class="scrollbar vertical"
				[ngClass]="{'dragging': dragging}"
				[attr.x]="positionOffset"
				[attr.y]="position + padding.up"
				[attr.height]="size"
			/>
		</svg:g>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class SVGScrollbarComponent implements OnChanges {
	@Input() zoom: number;
	@Input() border: Border;
	@Input() translate: Coordinate;
	@Input() contentSize: Coordinate;
	@Input() padding: Padding = new Padding(0,0,0,0);
	@Input() positionOffset: number = 5;

	@Input() horizontal: any;

	@Output("onScroll") translateChange: EventEmitter<Coordinate> = new EventEmitter<Coordinate>();

	dragging: boolean = false;
	size: number = 0;
	position: number = 0;

	constructor(private tr: ZUITransformService) {}

	@HostListener('mousedown', ['$event']) onMouseDown(e: MouseEvent) {
		if (e.button != 0) {
			return;
		}
		e.stopPropagation();
		this.dragging = true;
	}

	@HostListener('window:mousemove', ['$event']) onMouseMove(e: MouseEvent) {
		if (!this.dragging) {
			return;
		}

		if (this.horizontal) {
			let movement = e.movementX;
			let translate = -((this.position + movement) / (this.contentSize.x - this.size) * (this.zoom * (this.border.max.x - this.border.min.x) - this.contentSize.x) + this.zoom * this.border.min.x);
			translate = this.tr._limitTranslate(translate, this.zoom, this.contentSize.x, [this.border.min.x, this.border.max.x]);
			this.translate = new Coordinate(translate, this.translate.y);
			this.translateChange.emit(this.translate);
		} else {
			let movement = e.movementY;
			let translate = -((this.position + movement) / (this.contentSize.y - this.size) * (this.zoom * (this.border.max.y - this.border.min.y) - this.contentSize.y) + this.zoom * this.border.min.y);
			translate = this.tr._limitTranslate(translate, this.zoom, this.contentSize.y, [this.border.min.y, this.border.max.y]);
			this.translate = new Coordinate(this.translate.x, translate);
			this.translateChange.emit(this.translate);
		}
	}

	@HostListener('window:mouseup', ['$event']) onMouseUp(e: MouseEvent) {
		this.dragging = false;
	}

	@HostListener('contextmenu', ['$event']) onContextMenu(e: MouseEvent) {
		e.stopPropagation();
	}

	ngOnChanges() {
		if (this.horizontal) {
			let borderSize = (this.border.max.x - this.border.min.x) * this.zoom;
			this.size = (this.contentSize.x / borderSize) * this.contentSize.x;
			this.position = (this.translate.x + this.zoom * this.border.min.x)
			this.position = this.position / (this.zoom * (this.border.min.x - this.border.max.x) + this.contentSize.x);
			this.position = this.position * (this.contentSize.x - this.size);
			this.position = this.position || 0;
		} else {
			let borderSize = (this.border.max.y - this.border.min.y) * this.zoom;
			this.size = (this.contentSize.y / borderSize) * this.contentSize.y;
			this.position = (this.translate.y + this.zoom * this.border.min.y)
			this.position = this.position / (this.zoom * (this.border.min.y - this.border.max.y) + this.contentSize.y);
			this.position = this.position * (this.contentSize.y - this.size);
			this.position = this.position || 0;
		}
	}
}
