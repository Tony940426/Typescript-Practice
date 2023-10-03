//Generic Classes
//Use them if we have a lot of classes with few property changes
class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value = 12
