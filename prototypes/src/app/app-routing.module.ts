import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cart-edit-template',
    loadChildren: () => import('./cart-edit-template/cart-edit-template.module').then( m => m.CartEditTemplatePageModule)
  },
  {
    path: 'cart-checkout-template',
    loadChildren: () => import('./cart-checkout-template/cart-checkout-template.module').then( m => m.CartCheckoutTemplatePageModule)
  },
  {
    path: 'option-dialog-template',
    loadChildren: () => import('./option-dialog-template/option-dialog-template.module').then( m => m.OptionDialogTemplatePageModule)
  },
  {
    path: 'cart-dialog-template',
    loadChildren: () => import('./cart-dialog-template/cart-dialog-template.module').then( m => m.CartDialogTemplatePageModule)
  },
  {
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then( m => m.FormTemplatePageModule)
  },
  {
    path: 'form-binding',
    loadChildren: () => import('./form-binding/form-binding.module').then( m => m.FormBindingPageModule)
  },
  {
    path: 'form-send-data',
    loadChildren: () => import('./form-send-data/form-send-data.module').then( m => m.FormSendDataPageModule)
  },
  {
    path: 'form-receive-data',
    loadChildren: () => import('./form-receive-data/form-receive-data.module').then( m => m.FormReceiveDataPageModule)
  },
  {
    path: 'list-template',
    loadChildren: () => import('./list-template/list-template.module').then( m => m.ListTemplatePageModule)
  },
  {
    path: 'form-input-template',
    loadChildren: () => import('./form-input-template/form-input-template.module').then( m => m.FormInputTemplatePageModule)
  },
  {
    path: 'condition-template',
    loadChildren: () => import('./condition-template/condition-template.module').then( m => m.ConditionTemplatePageModule)
  },
  {
    path: 'agreement-template',
    loadChildren: () => import('./agreement-template/agreement-template.module').then( m => m.AgreementTemplatePageModule)
  },
  {
    path: 'consent-info-user-template',
    loadChildren: () => import('./consent-info-user-template/consent-info-user-template.module').then( m => m.ConsentInfoUserTemplatePageModule)
  },
  {
    path: 'consent-info-manager-template',
    loadChildren: () => import('./consent-info-manager-template/consent-info-manager-template.module').then( m => m.ConsentInfoManagerTemplatePageModule)
  },
  {
    path: 'home-template',
    loadChildren: () => import('./home-template/home-template.module').then( m => m.HomeTemplatePageModule)
  },
  {
    path: 'condition-timer-template',
    loadChildren: () => import('./condition-timer-template/condition-timer-template.module').then( m => m.ConditionTimerTemplatePageModule)
  },
  {
    path: 'consent-register-template',
    loadChildren: () => import('./consent-register-template/consent-register-template.module').then( m => m.ConsentRegisterTemplatePageModule)
  },
  {
    path: 'option-dialog-binding',
    loadChildren: () => import('./option-dialog-binding/option-dialog-binding.module').then( m => m.OptionDialogBindingPageModule)
  },
  {
    path: 'form-confirm-dialog',
    loadChildren: () => import('./form-confirm-dialog/form-confirm-dialog.module').then( m => m.FormConfirmDialogPageModule)
  },
  {
    path: 'form-service',
    loadChildren: () => import('./form-service/form-service.module').then( m => m.FormServicePageModule)
  },  {
    path: 'option-dialog-no-submit',
    loadChildren: () => import('./option-dialog-no-submit/option-dialog-no-submit.module').then( m => m.OptionDialogNoSubmitPageModule)
  },
  {
    path: 'gv-product-list',
    loadChildren: () => import('./gv-product-list/gv-product-list.module').then( m => m.GvProductListPageModule)
  },
  {
    path: 'gv-cart-edit',
    loadChildren: () => import('./gv-cart-edit/gv-cart-edit.module').then( m => m.GvCartEditPageModule)
  },
  {
    path: 'gv-cart-payment',
    loadChildren: () => import('./gv-cart-payment/gv-cart-payment.module').then( m => m.GvCartPaymentPageModule)
  },
  {
    path: 'gv-transition-info',
    loadChildren: () => import('./gv-transition-info/gv-transition-info.module').then( m => m.GvTransitionInfoPageModule)
  },
  {
    path: 'ev-home-pay',
    loadChildren: () => import('./ev-home-pay/ev-home-pay.module').then( m => m.EvHomePayPageModule)
  },
  {
    path: 'homefeed-detail',
    loadChildren: () => import('./homefeed-detail/homefeed-detail.module').then( m => m.HomefeedDetailPageModule)
  },
  {
    path: 'ev-home-refund',
    loadChildren: () => import('./ev-home-refund/ev-home-refund.module').then( m => m.EvHomeRefundPageModule)
  },
  {
    path: 'ev-product-list',
    loadChildren: () => import('./ev-product-list/ev-product-list.module').then( m => m.EvProductListPageModule)
  },
  {
    path: 'ev-consent-product',
    loadChildren: () => import('./ev-consent-product/ev-consent-product.module').then( m => m.EvConsentProductPageModule)
  },
  {
    path: 'ev-home-comfirm-consent',
    loadChildren: () => import('./ev-home-comfirm-consent/ev-home-comfirm-consent.module').then( m => m.EvHomeComfirmConsentPageModule)
  },
  {
    path: 'ev-homefeed-detail',
    loadChildren: () => import('./ev-homefeed-detail/ev-homefeed-detail.module').then( m => m.EvHomefeedDetailPageModule)
  },
  {
    path: 'ev-transition-info',
    loadChildren: () => import('./ev-transition-info/ev-transition-info.module').then( m => m.EvTransitionInfoPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'ev-cart-payment',
    loadChildren: () => import('./ev-cart-payment/ev-cart-payment.module').then( m => m.EvCartPaymentPageModule)
  },
  {
    path: 'ev-cart-edit',
    loadChildren: () => import('./ev-cart-edit/ev-cart-edit.module').then( m => m.EvCartEditPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
