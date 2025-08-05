import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Pediatric = () => {
  const services = [
    {
      title: 'Лечение кариеса молочных зубов',
      description: 'Бережное лечение с использованием современных материалов',
      icon: 'Zap',
      price: 'от 2 500 ₽',
      age: '2-12 лет',
      duration: '30-45 мин'
    },
    {
      title: 'Герметизация фиссур',
      description: 'Профилактика кариеса постоянных зубов',
      icon: 'Shield',
      price: 'от 2 000 ₽',
      age: '6-14 лет',
      duration: '20-30 мин'
    },
    {
      title: 'Фторирование зубов',
      description: 'Укрепление эмали и профилактика кариеса',
      icon: 'Sparkles',
      price: 'от 1 500 ₽',
      age: '3-16 лет',
      duration: '15-20 мин'
    },
    {
      title: 'Удаление молочных зубов',
      description: 'Безболезненное удаление с психологической подготовкой',
      icon: 'Scissors',
      price: 'от 1 500 ₽',
      age: '4-12 лет',
      duration: '15-25 мин'
    },
    {
      title: 'Детская ортодонтия',
      description: 'Исправление прикуса съемными аппаратами',
      icon: 'Smile',
      price: 'от 15 000 ₽',
      age: '6-16 лет',
      duration: '6-18 месяцев'
    },
    {
      title: 'Профессиональная чистка',
      description: 'Деликатная чистка зубов специальными пастами',
      icon: 'Brush',
      price: 'от 3 000 ₽',
      age: '5-16 лет',
      duration: '30-40 мин'
    }
  ];

  const ageGroups = [
    {
      age: '0-3 года',
      title: 'Первые зубки',
      description: 'Знакомство с врачом, обучение гигиене, профилактика',
      services: ['Консультация', 'Обучение гигиене', 'Фторирование'],
      tips: [
        'Первый визит в 1 год',
        'Чистка зубов с появления первого зуба',
        'Ограничение сладкого',
        'Использование детской зубной пасты'
      ]
    },
    {
      age: '4-7 лет',
      title: 'Молочные зубы',
      description: 'Лечение кариеса, подготовка к смене зубов',
      services: ['Лечение кариеса', 'Герметизация фиссур', 'Удаление зубов'],
      tips: [
        'Регулярные осмотры каждые 6 месяцев',
        'Самостоятельная чистка зубов',
        'Контроль питания',
        'Подготовка к смене зубов'
      ]
    },
    {
      age: '8-12 лет',
      title: 'Смена зубов',
      description: 'Контроль прорезывания, ортодонтическая коррекция',
      services: ['Ортодонтия', 'Лечение постоянных зубов', 'Профилактика'],
      tips: [
        'Контроль прорезывания постоянных зубов',
        'Раннее ортодонтическое лечение',
        'Герметизация фиссур',
        'Обучение правильной гигиене'
      ]
    },
    {
      age: '13-17 лет',
      title: 'Подростки',
      description: 'Эстетическая стоматология, ортодонтическое лечение',
      services: ['Брекеты', 'Отбеливание', 'Эстетическая реставрация'],
      tips: [
        'Мотивация к гигиене',
        'Ортодонтическое лечение',
        'Профилактика заболеваний десен',
        'Эстетические процедуры'
      ]
    }
  ];

  const specialApproaches = [
    {
      title: 'Игровая терапия',
      description: 'Лечение в игровой форме для снижения тревожности',
      icon: 'Gamepad2',
      methods: ['Сказкотерапия', 'Ролевые игры', 'Мультфильмы', 'Игрушки-помощники']
    },
    {
      title: 'Седация закисью азота',
      description: 'Безопасная седация для тревожных детей',
      icon: 'Cloud',
      methods: ['Веселящий газ', 'Быстрое действие', 'Полная безопасность', 'Контролируемый эффект']
    },
    {
      title: 'Адаптационные визиты',
      description: 'Постепенное привыкание к стоматологическому лечению',
      icon: 'Heart',
      methods: ['Знакомство с кабинетом', 'Игры с инструментами', 'Постепенное лечение', 'Поощрения']
    },
    {
      title: 'Родительское сопровождение',
      description: 'Присутствие родителей во время лечения',
      icon: 'Users',
      methods: ['Совместные консультации', 'Обучение родителей', 'Поддержка во время лечения', 'Домашний уход']
    }
  ];

  const preventionProgram = [
    {
      title: 'Школа здоровой улыбки',
      description: 'Обучающие программы для детей и родителей',
      activities: ['Уроки гигиены', 'Правильное питание', 'Профилактические осмотры', 'Игровые занятия']
    },
    {
      title: 'Программа "Растем без кариеса"',
      description: 'Комплексная профилактика с рождения до 18 лет',
      activities: ['Регулярные осмотры', 'Профессиональная чистка', 'Фторирование', 'Герметизация фиссур']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Icon name="Baby" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">DentalCenter Kids</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-pink-600 transition-colors">Главная</a>
              <a href="/services" className="text-gray-600 hover:text-pink-600 transition-colors">Услуги</a>
              <a href="/doctors" className="text-gray-600 hover:text-pink-600 transition-colors">Врачи</a>
              <a href="/pediatric" className="text-pink-600 font-medium">Детская стоматология</a>
              <a href="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">Детская</span> стоматология
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Специализированное отделение для маленьких пациентов. Лечение без страха и боли 
            в игровой форме с использованием современных технологий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записать ребенка
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Виртуальная экскурсия
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги для детей</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр стоматологических услуг для детей от 0 до 18 лет
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Возраст:</span>
                      <p className="font-medium text-gray-900">{service.age}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Время:</span>
                      <p className="font-medium text-gray-900">{service.duration}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-pink-50 text-pink-700 font-semibold text-lg px-4 py-2">
                      {service.price}
                    </Badge>
                  </div>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Лечение по возрастам</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Индивидуальный подход к каждой возрастной группе
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                      {group.age.split('-')[0]}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{group.title}</CardTitle>
                      <Badge variant="secondary" className="bg-pink-50 text-pink-700 mt-1">
                        {group.age}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base mt-4">
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Основные услуги:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="border-pink-200 text-pink-700">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Рекомендации:</h4>
                    <ul className="space-y-2">
                      {group.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <Icon name="Check" className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Approaches */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Особые подходы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Методы работы с детьми для комфортного лечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialApproaches.map((approach, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={approach.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {approach.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {approach.methods.map((method, idx) => (
                      <li key={idx} className="flex items-center justify-center text-gray-600 text-sm">
                        <Icon name="Star" className="w-3 h-3 text-pink-500 mr-2" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наш детский стоматолог</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специалист с большим опытом работы с детьми
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src="/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-500 text-white text-3xl">
                      КЕ
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Козлова Елена Михайловна</h3>
                  <p className="text-pink-600 font-medium mb-4">Детский стоматолог</p>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    8 лет опыта
                  </Badge>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Елена Михайловна - опытный детский стоматолог, который нашел особый подход к работе с детьми. 
                    Она использует игровые методики, сказкотерапию и современные технологии для создания 
                    комфортной атмосферы во время лечения.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Образование:</h4>
                      <p className="text-gray-600 text-sm">МГМСУ им. А.И. Евдокимова, специализация по детской стоматологии</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Сертификаты:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Детская психология</li>
                        <li>• Седация N2O</li>
                        <li>• Ортодонтия</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    Записаться к врачу
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prevention Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Программы профилактики</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специальные программы для поддержания здоровья детских зубов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {preventionProgram.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Включает:</h4>
                  <ul className="space-y-2">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Icon name="Check" className="w-4 h-4 text-pink-500 mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white">
                    <Icon name="Info" className="w-4 h-4 mr-2" />
                    Подробнее о программе
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Советы родителям</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Как подготовить ребенка к визиту и поддерживать здоровье зубов дома
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Home" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Подготовка к визиту</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Расскажите о визите в позитивном ключе</li>
                  <li>• Не используйте слова "больно", "укол"</li>
                  <li>• Приходите в хорошем настроении</li>
                  <li>• Возьмите любимую игрушку</li>
                  <li>• Не обещайте подарки за хорошее поведение</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Brush" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Домашняя гигиена</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Чистка зубов 2 раза в день</li>
                  <li>• Детская зубная паста с фтором</li>
                  <li>• Мягкая зубная щетка</li>
                  <li>• Помощь родителей до 8 лет</li>
                  <li>• Замена щетки каждые 3 месяца</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Apple" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Правильное питание</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Ограничение сладкого</li>
                  <li>• Полезные перекусы (фрукты, овощи)</li>
                  <li>• Достаточное количество воды</li>
                  <li>• Избегание липких сладостей</li>
                  <li>• Кальций и витамины</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Calendar" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Регулярность визитов</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Первый визит в 1 год</li>
                  <li>• Осмотры каждые 6 месяцев</li>
                  <li>• Профчистка 2 раза в год</li>
                  <li>• Фторирование по показаниям</li>
                  <li>• Контроль прорезывания зубов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="AlertTriangle" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Тревожные сигналы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Жалобы на боль в зубе</li>
                  <li>• Темные пятна на зубах</li>
                  <li>• Кровоточивость десен</li>
                  <li>• Неприятный запах изо рта</li>
                  <li>• Отказ от жевания</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Gift" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Мотивация</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Похвала за хорошую гигиену</li>
                  <li>• Календарь чистки зубов</li>
                  <li>• Красивые зубные щетки</li>
                  <li>• Совместная чистка зубов</li>
                  <li>• Положительный пример</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Детское отделение</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специально оборудованное пространство для маленьких пациентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gamepad2" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Игровая зона</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Яркая игровая зона с игрушками и развивающими играми
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Мультфильмы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Потолочные мониторы с мультфильмами во время лечения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Яркий дизайн</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Красочное оформление кабинетов в детском стиле
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Подарки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Небольшие подарки для храбрых пациентов после лечения
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-purple-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Позаботьтесь о здоровье зубов вашего ребенка</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на консультацию к детскому стоматологу и получите индивидуальный план профилактики
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записать ребенка
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Задать вопрос врачу
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pediatric;