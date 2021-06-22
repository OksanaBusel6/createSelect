import './scss/_reset.scss';
import './scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  buildSelect('mySelect');
});

class BuildSelect {
  constructor(selectID) {
    this.parentClass = selectID;

    createSelect();
  }

  createSelect() {
    const $select = document.getElementById(this.parentClass),
          $optionList = $select.querySelectorAll('option');

    $select.style.display = 'none';

    const $parent = this.createEl('div', [this.parentClass]);

    $parent.insertAdjacentElement('afterbegin', this.createEl('span', ['current']));

    const $list = this.createEl('ul', ['list']);

    $optionList.forEach((option, i) => {
      const classList = i === 0 ? ['option', 'selected', 'focus'] : ['option'];

      const $li = this.createEl('li', classList);
      $li.textContent = option.value;
      $li.setAttribute('data-value', option.value);

      $list.insertAdjacentElement('beforeend', $li);
    });

    $parent.insertAdjacentElement('beforeend', $list);

    $select.insertAdjacentElement('afterend', $parent);
  }

  createEl(selector, className) {
    const $element = document.createElement(selector);

    $element.classList.add(...className);

    return $element;
  }

  addHandlers() {
    
  }
}
