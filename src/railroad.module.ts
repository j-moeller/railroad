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
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { ContextMenu } from './contextmenu/contextmenu.component';
import { ContextDirective } from './contextmenu/contextmenu.directive';
import { RailroadComponent } from './railroad.component';
import { RailroadSVGComponent } from './railroad-svg.component';

import { SVGUnitedStatesComponent } from './misc/svg-united-states.component';
import { SVGFirefoxComponent } from './misc/svg-firefox.component';
import { SVGGallardoComponent } from './misc/svg-gallardo.component';
import { SVGNetworkComponent } from './misc/svg-network.component';
import { SVGGermanyComponent } from './misc/svg-germany.component';

import { RailroadService } from './railroad.service';

import { Slider } from './misc/slider.component';

@NgModule({
	imports: [BrowserModule, FormsModule, CommonModule],
	declarations: [RailroadComponent, RailroadSVGComponent, ContextMenu, ContextDirective, Slider,
	SVGUnitedStatesComponent, SVGFirefoxComponent, SVGGallardoComponent, SVGNetworkComponent,
	SVGGermanyComponent],
	providers: [RailroadService],
	exports: [RailroadComponent]
})
export class RailroadModule { }