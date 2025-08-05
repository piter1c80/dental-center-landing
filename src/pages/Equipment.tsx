import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Equipment = () => {
  const equipment = [
    {
      name: 'Дентальный микроскоп Carl Zeiss OPMI pico',
      category: 'Диагностика',
      description: 'Высокоточный микроскоп для эндодонтического лечения и микрохирургии',
      features: [
        'Увеличение до 25x',
        'LED освещение',
        'Запись видео',
        'Эргономичный дизайн'
      ],
      benefits: [
        'Точная диагностика',
        'Минимальное вмешательство',
        'Лучшие результаты лечения',
        'Комфорт для врача'
      ],
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      year: '2023'
    },
    {
      name: '3D томограф Planmeca ProMax 3D',
      category: 'Рентгенодиагностика',
      description: 'Современный конусно-лучевой томограф для трехмерной диагностики',
      features: [
        'Низкая доза облучения',
        '3D изображения высокого разрешения',
        'Быстрое сканирование',
        'Программное обеспечение для планирования'
      ],
      benefits: [
        'Точное планирование имплантации',
        'Диагностика скрытых патологий',
        'Безопасность для пациента',
        'Контроль качества лечения'
      ],
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      year: '2023'
    },
    {
      name: 'Лазерная установка Fotona LightWalker',
      category: 'Лазерная терапия',
      description: 'Многофункциональная лазерная система для лечения мягких и твердых тканей',
      features: [
        'Два типа лазера Er:YAG и Nd:YAG',
        'Бесконтактное лечение',
        'Регулируемая мощность',
        'Различные насадки'
      ],
      benefits: [
        'Безболезненное лечение',
        'Быстрое заживление',
        'Стерилизующий эффект',
        'Минимальная травматичность'
      ],
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      year: '2022'
    },
    {
      name: 'CAD/CAM система CEREC Primescan',
      category: 'Цифровое протезирование',
      description: 'Система для изготовления керамических реставраций за одно посещение',
      features: [
        'Интраоральное сканирование',
        'Цифровое моделирование',
        'Фрезерование керамики',
        'Высокая точность'
      ],
      benefits: [
        'Протезирование за 1 визит',
        'Идеальная посадка',
        'Естественная эстетика',
        'Долговечность'
      ],
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      year: '2023'
    },
    {
      name: 'Ультразвуковая система Varios 970',
      category: 'Хирургия',
      description: 'Пьезохирургическая система для атравматичных операций',
      features: [
        'Ультразвуковые колебания',
        'Селективное воздействие',
        'Охлаждение физраствором',
        'Различные насадки'
      ],
      benefits: [
        'Сохранение мягких тканей',
        'Минимальный отек',
        'Быстрое заживление',
        'Высокая точность'
      ],
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      year: '2022'
    },
    {
      name: 'Стоматологическая установка Sirona C8+',
      category: 'Лечебное оборудование',
      description: 'Современная стоматологическая установка с полным набором функций',
      features: [
        'Эргономичное кресло',
        'Светодиодный светильник',
        'Встроенная камера',
        'Система дезинфекции'
      ],
      benefits: [
        'Комфорт пациента',
        'Удобство работы врача',
        'Высокое качество освещения',
        'Безопасность'
      ],
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      year: '2023'
    }
  ];

  const categories = [
    'Все оборудование',
    'Диагностика',
    'Рентгенодиагностика',
    'Лазерная терапия',
    'Цифровое протезирование',
    'Хирургия',
    'Лечебное оборудование'
  ];

  const certifications = [
    {
      name: 'ISO 13485',
      description: 'Международный стандарт качества медицинских изделий',
      icon: 'Award'
    },
    {
      name: 'CE Marking',
      description: 'Европейский знак соответствия',
      icon: 'Shield'
    },
    {
      name: 'FDA Approved',
      description: 'Одобрено управлением по контролю качества США',
      icon: 'CheckCircle'
    },
    {
      name: 'Росздравнадзор',
      description: 'Регистрация в Российской Федерации',
      icon: 'FileCheck'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
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
              <a href="/equipment" className="text-blue-600 font-medium">Оборудование</a>
              <a href="/contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
            Современное <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">оборудование</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Мы инвестируем в лучшие технологии для обеспечения высочайшего качества 
            стоматологического лечения. Наше оборудование соответствует международным стандартам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Виртуальный тур
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на прием
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {item.category}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      {item.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Характеристики:</h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <Icon name="Settings" className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Преимущества:</h4>
                      <ul className="space-y-2">
                        {item.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <Icon name="Check" className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Info" className="w-4 h-4 mr-2" />
                    Подробнее об оборудовании
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Сертификации и стандарты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Все наше оборудование сертифицировано и соответствует международным стандартам качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Преимущества современных технологий</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Как новейшее оборудование улучшает качество лечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Точность диагностики</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  3D томография и микроскопия позволяют выявить проблемы на ранней стадии
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Комфорт пациента</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Лазерные технологии и современная анестезия обеспечивают безболезненное лечение
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Экономия времени</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  CAD/CAM технологии позволяют изготавливать протезы за одно посещение
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Современные системы стерилизации и низкодозовая рентгенография
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Качество результата</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Высокоточное оборудование обеспечивает превосходные результаты лечения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Инновации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Постоянное обновление оборудования в соответствии с мировыми трендами
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment in Technology */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Инвестиции в технологии</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Мы постоянно инвестируем в новейшее оборудование для лучшего лечения
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50М+</div>
              <div className="opacity-90">рублей инвестиций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="opacity-90">единиц оборудования</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2023</div>
              <div className="opacity-90">год последнего обновления</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">сертифицированное оборудование</div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance and Service */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Обслуживание и контроль качества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Регулярное техническое обслуживание гарантирует стабильную работу оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Регулярное ТО</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Плановое техническое обслуживание каждые 3 месяца сертифицированными специалистами
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Калибровка оборудования
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Замена расходных материалов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Проверка безопасности
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Shield" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Контроль качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Ежедневный контроль работы оборудования и соблюдения протоколов безопасности
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Проверка стерилизации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Контроль дозы облучения
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Мониторинг параметров
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Регулярное обучение врачей работе с новым оборудованием и технологиями
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Курсы повышения квалификации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Сертификация производителей
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Практические тренинги
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Планы развития</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Новое оборудование, которое мы планируем приобрести в ближайшее время
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Icon name="Cpu" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Роботизированная имплантация</CardTitle>
                    <Badge variant="secondary" className="bg-purple-50 text-purple-700 mt-1">
                      2025 год
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Система роботизированной имплантации для максимальной точности установки имплантов
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Точность до 0.1 мм
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Минимальная травматичность
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Предсказуемый результат
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Icon name="Scan" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Интраоральный сканер</CardTitle>
                    <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 mt-1">
                      2025 год
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Цифровое сканирование полости рта для точного изготовления протезов
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Отказ от слепков
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Высокая точность
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Комфорт пациента
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Оцените преимущества современных технологий</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на прием и убедитесь в качестве лечения на новейшем оборудовании
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на прием
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Виртуальный тур
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;