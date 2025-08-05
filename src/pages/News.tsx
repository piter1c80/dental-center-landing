import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const News = () => {
  const news = [
    {
      title: 'Открытие нового отделения детской стоматологии',
      excerpt: 'В нашей клинике открылось специализированное отделение для маленьких пациентов с игровой зоной и современным оборудованием.',
      content: 'Мы рады сообщить об открытии нового отделения детской стоматологии площадью 200 кв.м. Отделение оснащено специальным детским оборудованием, игровой зоной и комнатой для родителей.',
      date: '15 марта 2024',
      category: 'Новости клиники',
      author: 'Администрация клиники',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      isImportant: true
    },
    {
      title: 'Новое оборудование: 3D томограф последнего поколения',
      excerpt: 'Установлен современный конусно-лучевой томограф Planmeca ProMax 3D для точной диагностики и планирования лечения.',
      content: 'Новый томограф позволяет получать трехмерные изображения высокого разрешения при минимальной лучевой нагрузке на пациента.',
      date: '10 марта 2024',
      category: 'Оборудование',
      author: 'Техническая служба',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      isImportant: false
    },
    {
      title: 'Участие в международной конференции по имплантологии',
      excerpt: 'Наши врачи приняли участие в крупнейшей европейской конференции по дентальной имплантологии в Берлине.',
      content: 'Доктора Петрова и Волков представили доклады о современных методах имплантации и получили сертификаты международного образца.',
      date: '5 марта 2024',
      category: 'Образование',
      author: 'Петрова А.В.',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      isImportant: false
    },
    {
      title: 'Запуск программы "Здоровая улыбка для всей семьи"',
      excerpt: 'Стартовала новая программа семейного обслуживания со скидками до 20% для всех членов семьи.',
      content: 'Программа включает комплексные осмотры, профилактику и лечение для всех членов семьи с индивидуальным планом для каждого.',
      date: '28 февраля 2024',
      category: 'Программы',
      author: 'Отдел маркетинга',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      isImportant: true
    },
    {
      title: 'Сертификация по стандарту ISO 9001:2015',
      excerpt: 'Клиника успешно прошла сертификацию по международному стандарту качества ISO 9001:2015.',
      content: 'Получение сертификата подтверждает высокое качество наших услуг и соответствие международным стандартам.',
      date: '20 февраля 2024',
      category: 'Достижения',
      author: 'Служба качества',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      isImportant: false
    },
    {
      title: 'Внедрение технологии цифрового планирования улыбки',
      excerpt: 'Теперь пациенты могут увидеть результат лечения еще до его начала благодаря технологии Digital Smile Design.',
      content: 'Цифровое планирование улыбки позволяет моделировать результат эстетического лечения и показать пациенту ожидаемый результат.',
      date: '15 февраля 2024',
      category: 'Технологии',
      author: 'Волков А.И.',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      isImportant: false
    },
    {
      title: 'Победа в конкурсе "Лучшая стоматологическая клиника 2024"',
      excerpt: 'DentalCenter признана лучшей частной стоматологической клиникой Москвы по версии пациентов.',
      content: 'Награда присуждена на основании отзывов пациентов, оценки качества услуг и уровня сервиса.',
      date: '10 февраля 2024',
      category: 'Награды',
      author: 'Администрация клиники',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      isImportant: true
    },
    {
      title: 'Расширение штата: новые специалисты в команде',
      excerpt: 'К нашей команде присоединились два новых врача: пародонтолог и детский стоматолог.',
      content: 'Морозова О.С. - врач-пародонтолог с 11-летним опытом, Козлова Е.М. - детский стоматолог, специалист по работе с тревожными детьми.',
      date: '1 февраля 2024',
      category: 'Кадры',
      author: 'HR-отдел',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      isImportant: false
    }
  ];

  const categories = [
    'Все новости',
    'Новости клиники',
    'Оборудование',
    'Образование',
    'Программы',
    'Достижения',
    'Технологии',
    'Награды',
    'Кадры'
  ];

  const upcomingEvents = [
    {
      title: 'День открытых дверей',
      date: '25 марта 2024',
      time: '10:00 - 16:00',
      description: 'Бесплатные консультации и экскурсии по клинике'
    },
    {
      title: 'Лекция "Профилактика кариеса у детей"',
      date: '30 марта 2024',
      time: '14:00 - 15:30',
      description: 'Бесплатная лекция для родителей'
    },
    {
      title: 'Мастер-класс по домашней гигиене',
      date: '5 апреля 2024',
      time: '11:00 - 12:00',
      description: 'Практические советы от гигиениста'
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
              <a href="/news" className="text-blue-600 font-medium">Новости</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Новости</span> клиники
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Следите за последними новостями нашей клиники: новое оборудование, 
            достижения врачей, специальные программы и мероприятия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Поиск новостей..."
                className="pl-10 pr-4 py-3 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Bell" className="w-5 h-5 mr-2" />
              Подписаться на новости
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* News Articles */}
            <div className="lg:col-span-3">
              {/* Categories Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
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

              {/* Featured News */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Важные новости</h2>
                <div className="space-y-6">
                  {news.filter(item => item.isImportant).map((article, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="aspect-video md:aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge className="bg-red-500 text-white">
                                <Icon name="Star" className="w-3 h-3 mr-1" />
                                Важно
                              </Badge>
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                                {article.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-2xl hover:text-blue-600 transition-colors cursor-pointer">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 text-base">
                              {article.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={article.image} />
                                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-xs">
                                    {article.author.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{article.author}</p>
                                  <p className="text-xs text-gray-500">{article.date}</p>
                                </div>
                              </div>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                Читать далее
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Regular News */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Все новости</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {news.filter(item => !item.isImportant).map((article, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                            {article.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 line-clamp-3">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={article.image} />
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-xs">
                                {article.author.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600">{article.author}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <Icon name="ArrowRight" className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
                  <Icon name="ChevronDown" className="w-5 h-5 mr-2" />
                  Загрузить еще новости
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Предстоящие события</CardTitle>
                  <CardDescription>
                    Мероприятия и акции клиники
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-l-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                        <Icon name="Calendar" className="w-3 h-3" />
                        <span>{event.date}</span>
                        <Icon name="Clock" className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">{event.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-green-500 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Подписка на новости</CardTitle>
                  <CardDescription className="text-blue-100">
                    Получайте свежие новости на email
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    <Icon name="Mail" className="w-4 h-4 mr-2" />
                    Подписаться
                  </Button>
                  <p className="text-xs opacity-75">
                    Отправляем не чаще 1 раза в неделю
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Мы в соцсетях</CardTitle>
                  <CardDescription>
                    Следите за новостями в социальных сетях
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-gray-300 hover:border-blue-500 hover:text-blue-500">
                    <Icon name="Instagram" className="w-5 h-5 mr-3" />
                    Instagram
                    <Badge variant="secondary" className="ml-auto">2.5K</Badge>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-300 hover:border-blue-500 hover:text-blue-500">
                    <Icon name="MessageCircle" className="w-5 h-5 mr-3" />
                    Telegram
                    <Badge variant="secondary" className="ml-auto">1.8K</Badge>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-300 hover:border-blue-500 hover:text-blue-500">
                    <Icon name="Facebook" className="w-5 h-5 mr-3" />
                    VKontakte
                    <Badge variant="secondary" className="ml-auto">3.2K</Badge>
                  </Button>
                </CardContent>
              </Card>

              {/* Archive */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Архив новостей</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600">
                    <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                    Март 2024 (8)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600">
                    <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                    Февраль 2024 (12)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600">
                    <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                    Январь 2024 (15)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600">
                    <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                    2023 год (156)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Пресс-релизы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Официальные заявления и важные объявления
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-red-50 text-red-700">
                    Пресс-релиз
                  </Badge>
                </div>
                <CardTitle className="text-xl">Открытие нового филиала</CardTitle>
                <CardDescription className="text-gray-600">
                  15 марта 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Сеть стоматологических клиник DentalCenter объявляет об открытии 
                  второго филиала в районе Сокольники.
                </p>
                <Button variant="outline" className="w-full">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Скачать пресс-релиз
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-red-50 text-red-700">
                    Пресс-релиз
                  </Badge>
                </div>
                <CardTitle className="text-xl">Партнерство с ведущими производителями</CardTitle>
                <CardDescription className="text-gray-600">
                  1 марта 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Подписаны соглашения о партнерстве с Nobel Biocare и Straumann 
                  для обеспечения пациентов лучшими имплантами.
                </p>
                <Button variant="outline" className="w-full">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Скачать пресс-релиз
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Медиа-кит</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Материалы для СМИ и партнеров
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Image" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Логотипы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Логотипы в различных форматах
                </CardDescription>
                <Button size="sm" variant="outline" className="w-full">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Camera" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Фотографии</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Фото клиники и оборудования
                </CardDescription>
                <Button size="sm" variant="outline" className="w-full">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Факты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Ключевые факты о клинике
                </CardDescription>
                <Button size="sm" variant="outline" className="w-full">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Контакты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Контакты пресс-службы
                </CardDescription>
                <Button size="sm" variant="outline" className="w-full">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  Связаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Хотите быть в курсе всех новостей?</h2>
          <p className="text-xl mb-8 opacity-90">
            Подпишитесь на нашу рассылку и социальные сети
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Bell" className="w-5 h-5 mr-2" />
              Подписаться на новости
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Users" className="w-5 h-5 mr-2" />
              Следить в соцсетях
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;