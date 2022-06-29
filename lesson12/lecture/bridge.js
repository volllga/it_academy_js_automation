/**
 *
 * ПАТТЕРН МОСТ (bridge)
 *
 * Паттерн МОСТ - отделяет абстракцию от реализации, благодаря чему появляется возможность независимо изменять то и
 * другое. Это структурный паттерн проектирования, который разделяет один или несколько классов на две отдельные
 * иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.
 * Например у нас есть класс Круг, и мы хотим создавать круги разного цвета, для этого нужно будет создать подклассы
 * Синий Круг, Желтый круг и т.д. А если потом появятся квадраты и треугольники, то для них тоже нужно будет создавать
 * большое количество подклассов. В итоге иерархия будет огромной. Логичнее создать две независимых иерархии -
 * Формы (круг, квадрат, треугольник) и Цвета (синий, желтый и т.д.) и потом соединить их композицией.
 */


// Основная иерархия (абстракция)
class interface_Pages {
  getContent() {
    throw new Error(`В ${this.constructor.name} не описан метод getContent()`)
  }
  setTheme() {
    throw new Error(`В ${this.constructor.name} не описан метод setTheme()`)
  }
}

class About extends interface_Pages { //страница о нас
  constructor(theme) {
    super();
    this.theme = theme
  }

  getContent() {
    return "About page in " + this.theme.getColor()
  }
  setTheme(theme) {
    this.theme = theme
  }
}

class Careers extends interface_Pages { // страница карьера
  constructor(theme) {
    super();
    this.theme = theme
  }

  getContent() {
    return "Careers page in " + this.theme.getColor()
  }
  setTheme(theme) {
    this.theme = theme
  }
}

// Вспомогательная иерархия (реализация)
class DarkTheme { // темная тема оформления
  getColor() {
    return 'Dark Black'
  }
}

class LightTheme { // светлая тема
  getColor() {
    return 'Off white'
  }
}

class AquaTheme { // голубая тема
  getColor() {
    return 'Light blue'
  }
}


const darkTheme = new DarkTheme()
const lightTheme = new LightTheme;

const about = new About(darkTheme); // указываем тему при инициации
const careers = new Careers(darkTheme);

console.log(about.getContent())// "About page in Dark Black"
console.log(careers.getContent())// "Careers page in Dark Black"

about.setTheme(lightTheme); // динамически меняем темы
careers.setTheme(lightTheme);

console.log(about.getContent())// "About page in Off white"
console.log(careers.getContent())// "Careers page in Off white"

