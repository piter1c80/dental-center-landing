import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Emergency = () => {
  const emergencyServices = [
    {
      title: 'Острая зубная боль',
      description: 'Экстренное обезболивание и лечение',
      icon: 'AlertTriangle',
      urgency: 'Критично',
      timeResponse: '30 минут',
      price: 'от 3 000 ₽'
    },
    {
      title: 'Травма зуба',
      description: 'Восстановление после травмы, реплантация',
      icon: 'Shield',
      urgency: 'Критично',
      timeResponse: '20 минут',
      price: 'от 5 000 ₽'
    },
    {
      title: 'Воспаление десны',
      description: 'Лечение острого периодонтита, абсцесса',
      icon: 'Heart',
      urgency: 'Высокая',
      timeResponse: '45 минут',
      price: 'от 4 000 ₽'
    },
    {
      title: 'Кровотечение',
      description: 'Остановка кровотечения после удаления',
      icon: 'Droplets',
      urgency: 'Критично',
      timeResponse: '15 минут',
      price: 'от 2 000 ₽'
    },
    {
      title: 'Сломанный протез',
      description: 'Экстренный ремонт протезов',
      icon: 'Wrench',
      urgency: 'Средняя',
      timeResponse: '60 минут',
      price: 'от 3 500 ₽'
    },
    {
      title: 'Выпала пломба',
      description: 'Временная пломба, обезболивание',
      icon: 'Circle',
      urgency: 'Средняя',
      timeResponse: '40 минут',
      price: 'от 2 500 ₽'
    }
  ];

  const firstAidTips = [
    {
      problem: 'Острая зубная боль',
      tips: [
        'Примите обезболивающее (ибупрофен, кетанов)',
        'Прополощите рот теплой водой',
        'Не прикладывайте тепло к больному месту',
        'Избегайте холодной и горячей пищи'
      ],
      dontDo: [
        'Не прикладывайте аспирин к зубу',
        'Не используйте спиртовые настойки',
        'Не грейте больное место'
      ]
    },
    {
      problem: 'Травма зуба',
      tips: [
        'Найдите отколовшийся кусочек зуба',
        'Промойте рот холодной водой',
        'Приложите холодный компресс',
        'Немедленно обратитесь к врачу'
      ],
      dontDo: [
        'Не трогайте поврежденный зуб руками',
        'Не пытайтесь самостоятельно вставить зуб',
        'Не откладывайте визит к врачу'
      ]
    },
    {
      problem: 'Кровотечение после удаления',
      tips: [
        'Прикусите стерильный тампон на 30 минут',
        'Не полощите рот первые 24 часа',
        'Избегайте горячей пищи и напитков',
        'Спите с приподнятой головой'
      ],
      dontDo: [
        'Не сплевывайте кровь',
        'Не курите и не пейте алкоголь',
        'Не трогайте лунку языком'
      ]
    }
  ];

  const contactInfo = [
    {
      title: 'Экстренная помощь 24/7',
      phone: '+7 (495) 911-11-11',
      description: 'Круглосуточная стоматологическая помощь',
      icon: 'Phone'
    },
    {
      title: 'WhatsApp экстренная связь',
      phone: '+7 (901) 911-11-11',
      description: 'Консультация и запись через мессенджер',
      icon: 'MessageCircle'
    },
    {
      title: 'Telegram бот',
      phone: '@DentalCenterBot',
      description: 'Быстрая связь через Telegram',
      icon: 'Send'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Icon name="Smile" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">DentalCenter</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors">Врачи</a>
              <a href="/emergency" className="text-red-600 font-medium">Экстренная помощь</a>
              <a href="/contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Экстренный вызов
            </Button>
          </div>
        </div>
      </header>

      {/* Emergency Alert */}
      <section className="py-8 px-6 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <Icon name="AlertTriangle" className="w-8 h-8 text-yellow-300" />
            <div className="text-center">
              <h2 className="text-2xl font-bold">Экстренная стоматологическая помощь 24/7</h2>
              <p className="text-lg opacity-90">Звоните: +7 (495) 911-11-11</p>
            </div>
            <Icon name="Phone" className="w-8 h-8 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Экстренная</span> помощь
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Круглосуточная стоматологическая помощь при острой боли, травмах и других 
            неотложных состояниях. Опытные врачи готовы помочь в любое время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Вызвать врача
            </Button>
            <Button size="lg" variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Онлайн консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Экстренные услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Виды неотложной стоматологической помощи, которую мы оказываем
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Icon name={service.icon} className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        service.urgency === 'Критично' ? 'bg-red-50 text-red-700' :
                        service.urgency === 'Высокая' ? 'bg-orange-50 text-orange-700' :
                        'bg-yellow-50 text-yellow-700'
                      }`}
                    >
                      {service.urgency}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Время ответа:</span>
                      <span className="font-medium text-gray-900">{service.timeResponse}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Стоимость:</span>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Icon name="Phone" className="w-4 h-4 mr-2" />
                    Вызвать врача
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Способы экстренной связи</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите удобный способ связи для получения экстренной помощи
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {contact.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600 mb-4">{contact.phone}</div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Связаться сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Tips */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Первая помощь</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что делать до приезда врача или визита в клинику
            </p>
          </div>

          <div className="space-y-8">
            {firstAidTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Icon name="AlertCircle" className="w-6 h-6 text-red-600 mr-3" />
                    {tip.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-4 flex items-center">
                        <Icon name="Check" className="w-5 h-5 mr-2" />
                        Что нужно делать:
                      </h4>
                      <ul className="space-y-2">
                        {tip.tips.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <Icon name="ArrowRight" className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-4 flex items-center">
                        <Icon name="X" className="w-5 h-5 mr-2" />
                        Чего делать нельзя:
                      </h4>
                      <ul className="space-y-2">
                        {tip.dontDo.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <Icon name="X" className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Form */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Экстренная заявка</h2>
            <p className="text-xl text-gray-600">
              Опишите вашу проблему и мы свяжемся с вами в течение 5 минут
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-red-700">Вызов экстренной помощи</CardTitle>
              <CardDescription>
                Заполните форму для быстрого реагирования наших специалистов
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип проблемы *</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Выберите тип проблемы</option>
                  <option>Острая зубная боль</option>
                  <option>Травма зуба</option>
                  <option>Воспаление десны</option>
                  <option>Кровотечение</option>
                  <option>Сломанный протез</option>
                  <option>Выпала пломба</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Уровень боли (1-10)</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                    <button
                      key={level}
                      className={`w-10 h-10 rounded-lg border-2 font-bold transition-colors ${
                        level <= 3 ? 'border-green-300 hover:bg-green-100' :
                        level <= 6 ? 'border-yellow-300 hover:bg-yellow-100' :
                        level <= 8 ? 'border-orange-300 hover:bg-orange-100' :
                        'border-red-300 hover:bg-red-100'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Описание проблемы *</label>
                <Textarea 
                  placeholder="Подробно опишите ваши симптомы, когда началась боль, что предшествовало..." 
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Адрес (для выезда врача)</label>
                <Input placeholder="Ваш адрес" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="home-visit" className="rounded" />
                  <label htmlFor="home-visit" className="text-sm text-gray-700">
                    Нужен выезд врача на дом
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="allergies" className="rounded" />
                  <label htmlFor="allergies" className="text-sm text-gray-700">
                    Есть аллергии на лекарства
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Согласен на обработку персональных данных *
                  </label>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                  <Icon name="AlertTriangle" className="w-4 h-4 mr-2" />
                  Отправить экстренную заявку
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Мы свяжемся с вами в течение 5 минут
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Когда обращаться за экстренной помощью</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Симптомы, при которых необходима немедленная стоматологическая помощь
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-xl text-red-700 flex items-center">
                  <Icon name="AlertTriangle" className="w-5 h-5 mr-2" />
                  Критические случаи (немедленно)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Сильная зубная боль, не снимающаяся обезболивающими</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Травма зуба с повреждением нерва</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Сильное кровотечение из лунки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Отек лица с повышением температуры</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Вывих или перелом челюсти</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl text-orange-700 flex items-center">
                  <Icon name="Clock" className="w-5 h-5 mr-2" />
                  Срочные случаи (в течение дня)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Выпала пломба или коронка</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Сломался зубной протез</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Воспаление десны без температуры</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Повышенная чувствительность зубов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ArrowRight" className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Неприятный запах изо рта</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Команда экстренной помощи</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Опытные врачи, готовые оказать помощь в любое время
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  ИС
                </div>
                <CardTitle className="text-xl">Иванов Сергей Петрович</CardTitle>
                <CardDescription className="text-red-600 font-medium">
                  Дежурный врач-терапевт
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                  15 лет опыта
                </Badge>
                <p className="text-gray-600 text-sm">
                  Специалист по экстренному обезболиванию и лечению острых состояний
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  ПА
                </div>
                <CardTitle className="text-xl">Петрова Анна Владимировна</CardTitle>
                <CardDescription className="text-red-600 font-medium">
                  Дежурный хирург
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                  12 лет опыта
                </Badge>
                <p className="text-gray-600 text-sm">
                  Специалист по экстренной хирургии и травматологии челюстно-лицевой области
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  КЕ
                </div>
                <CardTitle className="text-xl">Козлова Елена Михайловна</CardTitle>
                <CardDescription className="text-red-600 font-medium">
                  Детский стоматолог
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                  8 лет опыта
                </Badge>
                <p className="text-gray-600 text-sm">
                  Специалист по экстренной помощи детям, работа с тревожными пациентами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8">
            <Icon name="AlertTriangle" className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Важная информация</h2>
            <div className="text-lg space-y-4 opacity-90">
              <p>
                При угрожающих жизни состояниях (затрудненное дыхание, потеря сознания, 
                сильное кровотечение) немедленно вызывайте скорую помощь по номеру 103
              </p>
              <p>
                Наша экстренная стоматологическая помощь работает круглосуточно, 
                но не заменяет скорую медицинскую помощь при критических состояниях
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Скорая помощь: 103
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Стоматолог: +7 (495) 911-11-11
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;