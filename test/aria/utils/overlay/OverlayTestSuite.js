/*
 * Copyright 2013 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "test.aria.utils.overlay.OverlayTestSuite",
    $extends : "aria.jsunit.TestSuite",
    $constructor : function () {
        this.$TestSuite.constructor.call(this);

        this.addTests("test.aria.utils.overlay.loadingIndicator.automatic.AutomaticTestCase");
        this.addTests("test.aria.utils.overlay.loadingIndicator.manual.ManualTestCase");
        this.addTests("test.aria.utils.overlay.loadingIndicator.scrollbar.ScrollbarTest");
        this.addTests("test.aria.utils.overlay.loadingIndicator.zindex.IndexTest");
        this.addTests("test.aria.utils.overlay.loadingIndicator.zindex.newAlgorithm.newStackingContext.asDescendant.IndexTestCase");
        this.addTests("test.aria.utils.overlay.loadingIndicator.zindex.newAlgorithm.newStackingContext.asNestedParent.IndexTestCase");
        this.addTests("test.aria.utils.overlay.loadingIndicator.zindex.newAlgorithm.newStackingContext.opacity.IndexTestCase");
        this.addTests("test.aria.utils.overlay.loadingIndicator.zindex.newAlgorithm.noStackingContext.bare.IndexTestCase");
        this.addTests("test.aria.utils.overlay.loadingIndicator.zindex.newAlgorithm.noStackingContext.zIndexOnly.IndexTestCase");
        this.addTests("test.aria.utils.overlay.loadingIndicator.refresh.RefreshTest");
        this.addTests("test.aria.utils.overlay.loadingIndicator.scrollableBody.ScrollableBodyTest");
        this.addTests("test.aria.utils.overlay.loadingIndicator.ieScrollIssue.IEScrollIssueTest");
        this.addTests("test.aria.utils.overlay.loadingIndicator.ieScrollIssue2.IEScrollIssue2EltTest");
        this.addTests("test.aria.utils.overlay.loadingIndicator.ieScrollIssue2.IEScrollIssue2SectionTest");
    }
});
