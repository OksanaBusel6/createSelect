export class CreateElement {
  constructor(selectId) {
    this.parentClass = selectId;
    this.$select = document.getElementById(selectId);
    this.optaonList = this.$select.querySelectorAll('option');
    
    this.$select.style.display = 'none';
  }

  init() {
    this.createParent();
    
    this.$parent.insertAdjacentElement('afterbegin', this.createSpan());

    this.createList();

    this.optaonList.forEach((option, index) => {
      this.$list.insertAdjacentElement('beforeend', this.createLi(option, index));
    });

    this.$parent.insertAdjacentElement('beforeend', this.$list);

    this.$select.insertAdjacentElement('afterend', this.$parent);
  }

  createParent() {
    this.$parent = this.createEl('div', [this.parentClass]);
  }

  createSpan() {
    return this.createEl('span', ['current']);
  }

  createList() {
    this.$list = this.createEl('ul', ['list']);
  }

  createLi(optionElement, index) {
    const classList = index === 0 ? ['option', 'selected', 'focus'] : ['option'];

    const $li = this.createEl('li', classList);
    $li.textContent = optionElement.value;
    $li.setAttribute('data-value', optionElement.value);

    return $li;
  }

  createEl(selector, className) {
    const $element = document.createElement(selector);

    $element.classList.add(...className);

    return $element;
  }
}