import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { IPlayground } from '../../../../../interfaces/IPlayground';
import { IPlaygroundProvider } from '../../../../../interfaces/IPlaygroundProvider';
import { playgroundAdapter } from '../../../../../services/playground/adapters/legacy-playground-adapter';

@Component({
    selector: 'uxd-layout-switching-splitter-ng1',
    templateUrl: './layout-switching-splitter-ng1.component.html',
    styleUrls: ['./layout-switching-splitter-ng1.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@DocumentationSectionComponent('ComponentsLayoutSwitchingSplitterNg1Component')
export class ComponentsLayoutSwitchingSplitterNg1Component extends BaseDocumentationSection implements IPlaygroundProvider {

    playground: IPlayground = playgroundAdapter({
        html: this.snippets.raw.layoutHtml,
        htmlAttributes: {
            'ng-controller': 'LayoutSwitchingSplitterDemoCtrl as vm'
        },
        css: [this.snippets.raw.stylesCss],
        js: [this.snippets.raw.controllerJs]
    });

    constructor() {
        super(require.context('./snippets/', false, /\.(html|css|js|ts)$/));
    }
}
