import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Technology = () => {
  const technologies = [
    {
      title: 'Цифровая стоматология',
      description: 'Полностью цифровой рабочий процесс от диагностики до протезирования',
      icon: 'Monitor',
      features: [
        'Интраоральное сканирование',
        'CAD/CAM моделирование',
        'Цифровое планирование улыбки',
        '3D печать моделей'
      ],
      benefits: [
        'Точность изготовления',
        'Сокращение времени лечения',
        'Предсказуемый результат',
        'Комфорт пациента'
      ],
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    },
    {
      title: 'Лазерные технологии',
      description: 'Применение лазера в различных областях стоматологии',
      icon: 'Zap',
      features: [
        'Лечение кариеса без бормашины',
        'Лазерная хирургия десен',
        'Стерилизация корневых каналов',
        'Отбеливание зубов'
      ],
      benefits: [
        'Безболезненность',
        'Быстрое заживление',
        'Минимальная кровоточивость',
        'Стерилизующий эффект'
      ],
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      title: 'Микроскопная стоматология',
      description: 'Лечение под увеличением для максимальной точности',
      icon: 'Eye',
      features: [
        'Увеличение до 25 раз',
        'LED освещение',
        'Видеозапись процедур',
        'Эргономичная работа врача'
      ],
      benefits: [
        'Сохранение здоровых тканей',
        'Качественная диагностика',
        'Долговечность лечения',
        'Контроль качества'
      ],
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    },
    {
      title: '3D диагностика и планирование',
      description: 'Трехмерная визуализация для точного планирования лечения',
      icon: 'Scan',
      features: [
        'Конусно-лучевая томография',
        '3D планирование имплантации',
        'Виртуальная хирургия',
        'Изготовление хирургических шаблонов'
      ],
      benefits: [
        'Точность планирования',
        'Минимальная инвазивность',
        'Предсказуемость результата',
        'Безопасность операций'
      ],
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    },
    {
      title: 'Седация и анестезия',
      description: 'Современные методы обезболивания и седации',
      icon: 'Heart',
      features: [
        'Седация закисью азота',
        'Компьютерная анестезия',
        'Аппликационная анестезия',
        'Мониторинг витальных функций'
      ],
      benefits: [
        'Полное отсутствие боли',
        'Снижение тревожности',
        'Комфорт во время лечения',
        'Безопасность процедур'
      ],
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      title: 'Регенеративная медицина',
      description: 'Использование факторов роста для ускорения заживления',
      icon: 'Sparkles',
      features: [
        'PRF терапия',
        'Плазмолифтинг',
        'Костные заменители',
        'Мембранная техника'
      ],
      benefits: [
        'Ускоренное заживление',
        'Лучшая интеграция имплантов',
        'Восстановление костной ткани',
        'Естественная регенерация'
      ],
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    }
  ];

  const innovations = [
    {
      title: 'Искусственный интеллект в диагностике',
      description: 'ИИ помогает выявлять кариес на ранних стадиях',
      status: 'В разработке',
      year: '2025'
    },
    {
      title: 'Роботизированная имплантация',
      description: 'Роботы-хирурги для максимальной точности',
      status: 'Планируется',
      year: '2025'
    },
    {
      title: 'Телемедицинские консультации',
      description: 'Удаленные консультации через VR',
      status: 'Тестирование',
      year: '2024'
    }
  ];

  const researchProjects = [
    {
      title: 'Исследование новых биоматериалов',
      partner: 'МГМСУ им. А.И. Евдокимова',
      description: 'Разработка биосовместимых материалов для регенерации костной ткани',
      status: 'Активно',
      duration: '2023-2025'
    },
    {
      title: 'Клинические испытания лазерной терапии',
      partner: 'НИИ стоматологии',
      description: 'Изучение эффективности лазерного лечения пародонтита',
      status: 'Завершено',
      duration: '2022-2024'
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
              <a href="/technology" className="text-blue-600 font-medium">Технологии</a>
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
            Передовые <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">технологии</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Мы используем самые современные технологии в стоматологии для обеспечения 
            высочайшего качества лечения, комфорта пациентов и предсказуемых результатов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Видео о технологиях
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши технологии</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Инновационные решения для современной стоматологии
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Icon name={tech.icon} className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{tech.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Возможности:</h4>
                      <ul className="space-y-2">
                        {tech.features.map((feature, idx) => (
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
                        {tech.benefits.map((benefit, idx) => (
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
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Инновации будущего</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Технологии, которые мы планируем внедрить в ближайшее время
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        innovation.status === 'В разработке' ? 'bg-blue-50 text-blue-700' :
                        innovation.status === 'Планируется' ? 'bg-purple-50 text-purple-700' :
                        'bg-orange-50 text-orange-700'
                      }`}
                    >
                      {innovation.status}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      {innovation.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{innovation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {innovation.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Научные исследования</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Участие в научных проектах и разработке новых методов лечения
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        project.status === 'Активно' ? 'bg-green-50 text-green-700' :
                        'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    Партнер: {project.partner}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Преимущества современных технологий</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Как инновации улучшают качество стоматологического лечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Точность</h3>
              <p className="opacity-90">Микронная точность диагностики и лечения</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Скорость</h3>
              <p className="opacity-90">Сокращение времени лечения в 2-3 раза</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Комфорт</h3>
              <p className="opacity-90">Безболезненное и комфортное лечение</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="opacity-90">Минимальные риски и осложнения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Сравнение методов лечения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Традиционные vs современные методы стоматологического лечения
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-600">Традиционные методы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="X" className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Слепки из альгината</h4>
                    <p className="text-sm text-gray-600">Неточность, дискомфорт пациента</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="X" className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Лечение без увеличения</h4>
                    <p className="text-sm text-gray-600">Риск пропустить детали</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="X" className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">2D рентген</h4>
                    <p className="text-sm text-gray-600">Ограниченная информация</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="X" className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Длительное изготовление</h4>
                    <p className="text-sm text-gray-600">Несколько визитов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Современные технологии</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Цифровое сканирование</h4>
                    <p className="text-sm text-gray-600">Высокая точность, комфорт</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Микроскопное лечение</h4>
                    <p className="text-sm text-gray-600">Максимальная точность</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">3D томография</h4>
                    <p className="text-sm text-gray-600">Полная картина состояния</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">CAD/CAM изготовление</h4>
                    <p className="text-sm text-gray-600">Протез за одно посещение</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Внедрение технологий</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              История внедрения современных технологий в нашей клинике
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <div className="space-y-12">
              {[
                { year: '2023', title: 'Дентальный микроскоп', description: 'Внедрение микроскопной стоматологии' },
                { year: '2023', title: '3D томограф', description: 'Трехмерная диагностика' },
                { year: '2022', title: 'Лазерная установка', description: 'Лазерные технологии в лечении' },
                { year: '2022', title: 'CAD/CAM система', description: 'Цифровое протезирование' },
                { year: '2021', title: 'Цифровая рентгенография', description: 'Переход на цифровые снимки' },
                { year: '2020', title: 'Интраоральные камеры', description: 'Визуализация для пациентов' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-bold">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Испытайте преимущества современных технологий</h2>
          <p className="text-xl text-gray-600 mb-8">
            Запишитесь на консультацию и узнайте, как новейшие технологии могут помочь в вашем лечении
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Посмотреть видео
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;