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

