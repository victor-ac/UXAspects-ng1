import { CommonModule } from '@angular/common';
import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorServiceModule, HybridModule, TabsetModule } from '@ux-aspects/ux-aspects';
import { ChartsModule } from 'ng2-charts';
import { DocumentationComponentsModule } from '../../../../components/components.module';
import { DocumentationCategoryComponent } from '../../../../components/documentation-category/documentation-category.component';
import { DocumentationPage, ResolverService } from '../../../../services/resolver/resolver.service';
import { WrappersModule } from '../../../../wrappers/wrappers.module';
import { ChartsBarChartNg1Component } from './bar-chart-ng1/bar-chart-ng1.component';
import { ChartsHorizontalBarChartNg1Component } from './horizontal-bar-chart-ng1/horizontal-bar-chart-ng1.component';
import { ChartsStackedBarChartNg1Component } from './stacked-bar-chart-ng1/stacked-bar-chart-ng1.component';

const SECTIONS = [
    ChartsBarChartNg1Component,
    ChartsHorizontalBarChartNg1Component,
    ChartsStackedBarChartNg1Component,
];

const ROUTES = [
    {
        path: '**',
        component: DocumentationCategoryComponent,
        data: {
            category: ResolverService.resolveCategoryData(DocumentationPage.Charts, 'Bar Charts')
        }
    }
];

@NgModule({
    imports: [
        ChartsModule,
        ColorServiceModule,
        CommonModule,
        DocumentationComponentsModule,
        HybridModule,
        RouterModule.forChild(ROUTES),
        TabsetModule,
        WrappersModule,
    ],
    exports: SECTIONS,
    declarations: SECTIONS,
    entryComponents: SECTIONS
})
export class ChartsBarChartsModule {

    constructor(componentFactoryResolver: ComponentFactoryResolver, resolverService: ResolverService) {
        resolverService.registerResolver(componentFactoryResolver);
    }
}
