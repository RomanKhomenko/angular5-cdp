<a name="1.4.0"></a>
## 1.4.0 (2018-03-29)

### Added
- OrderByPipe pipe

### Notes
Pipes:
- async pipe is used in the ProductsComponent
- orderBy pipe. Is used in the CartComponent
- i18nSelect pipe is used in the CartComponent
- uppercase pipes are used in the CartItemComponent, ProductComponent
- titlecase pipe is used in the ProductComponent
- currency pipes are used in the ProductComponent, CartItemComponent, CartComponent

### Useful links
-[homework](homework/HomeTask_4.txt)

<a name="1.3.0"></a>
## 1.3.0 (2018-03-29)

### Added
- data.json file to assets folder
- demo-task-3 to show different DI
- services:
	1. GeneratorService with token
	2. ConfigOptionService with token
	3. LocalStorageService
	4. Constants service
	5. services index.ts

### Changed
- ProductHttpService works with HttpClient
- ProductService works with promise
- ProductsComponent's template uses Async pipe
- CartService extend logic form managin products
- CartComponents's template show sub total and all total values
	
### Notes
Point 8 were implemented in highlight directives in the previos homework.
It has already used Renderer2 and and @Input

### Useful links
-[homework](homework/HomeTask_3.txt)

<a name="1.0.3"></a>
## 1.0.3 (2018-03-27)

### Fixed
- [components](https://github.com/RomanKhomenko/angular5-cdp/issues/1)
- [app.module](https://github.com/RomanKhomenko/angular5-cdp/issues/2)
- [shared.module](https://github.com/RomanKhomenko/angular5-cdp/issues/3)
- [product-http](https://github.com/RomanKhomenko/angular5-cdp/issues/4)
- [ngModel](https://github.com/RomanKhomenko/angular5-cdp/issues/4)

<a name="1.0.2"></a>
## 1.0.2 (2018-03-26)

### Added
- CoreModule. Contains:
	1. Header component
	2. Http Service
	3. Service Models
	
- SharedModule. Contains:
	1. Directives
	2. Common Models
	
- ProductFeatureModule. Contains:
	1. cart component
	2. products component
	3. productservice
	4. cartservice
	5. communicationservice

### Changed
- Cart-item component. Used directives: ngStyle, ngClass, events.

### Removed
- x-shared folder. Moved to Core and Shared Module
- product-cart communication component. Replaced with communication service

### Focus on
Please find cart-item.component.ng-problem.html. NgModel directives cause unknown issue

### Useful links
-[homework](homework/HomeTask_2.txt)

<a name="1.0.1"></a>
## 1.0.1 (2018-03-22)

### Added
- x-shared folder. Used for common code base. 
    Contains:
    1. Models
    2. ProductsService
    3. ProductCommunicationService
- header component
- cart component
- products components
- product-cart communication component 

### Changed
- communication between products and cart components by thied product-communication component

### Removed
- communication between siblings components. Not ready, will be added with next release

### Useful links
-[homework](homework/HomeTask_1.txt)

<a name="1.0.0"></a>
## 1.0.0 (2018-03-22)

##### Chores

*  initial commit from @angular/cli (dac84c73)

