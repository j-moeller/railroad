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
import { Component } from '@angular/core';

@Component({
	selector: 'ee-railroad',
	styles: [`
		.railroad {
			display: flex;
			flex: 1;
			height: 100%;
		}

		ee-zui-viewbox, ee-zui-transform {
			display: flex;
			flex: 1;
		}
	`],
	template: `
	<div class="railroad">
		<ee-zui-transform [border]="border">
			<svg:g svg-germany></svg:g>
			<svg:defs>
				<svg:pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
					<svg:path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
				</svg:pattern>
				<svg:pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
					<svg:rect width="100" height="100" fill="url(#smallGrid)"/>
					<svg:path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"/>
				</svg:pattern>
			</svg:defs>
			<svg:rect x="0" y="0" [attr.width]="border[1][0]" [attr.height]="border[1][1]" fill="url(#grid)" />
			<svg:rect x="100" y="100" [attr.width]="border[1][0] - 200" [attr.height]="border[1][1] - 200" style="fill:transparent; stroke: grey;"/>
			<svg:rect x="200" y="200" [attr.width]="border[1][0] - 400" [attr.height]="border[1][1] - 400" style="fill:transparent; stroke: red;"/>
		</ee-zui-transform>
	</div>
	`
})

export class RailroadComponent {
	border: [[number, number], [number, number]] = [[0,0],[2000,2000]];
}
