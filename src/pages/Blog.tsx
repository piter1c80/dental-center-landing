import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const articles = [
    {
      title: 'Как правильно чистить зубы: пошаговое руководство',
      excerpt: 'Правильная гигиена полости рта - основа здоровья зубов. Узнайте, как правильно чистить зубы, какую зубную щетку выбрать и сколько времени уделять чистке.',
      author: 'Иванов Сергей Петрович',
      authorRole: 'Главный врач',
      date: '15 марта 2024',
      readTime: '5 мин',
      category: 'Профилактика',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      tags: ['гигиена', 'профилактика', 'зубная щетка']
    },
    {
      title: 'Имплантация зубов: современные методы и технологии',
      excerpt: 'Имплантация - лучший способ восстановления утраченных зубов. Рассказываем о видах имплантов, этапах операции и реабилитации.',
      author: 'Петрова Анна Владимировна',
      authorRole: 'Стоматолог-хирург',
      date: '10 марта 2024',
      readTime: '8 мин',
      category: 'Хирургия',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      tags: ['имплантация', 'хирургия', 'протезирование']
    },
    {
      title: 'Брекеты или элайнеры: что выбрать для исправления прикуса',
      excerpt: 'Сравниваем два популярных метода ортодонтического лечения. Плюсы и минусы брекетов и элайнеров, показания к применению.',
      author: 'Смирнов Дмитрий Алексеевич',
      authorRole: 'Врач-ортодонт',
      date: '5 марта 2024',
      readTime: '6 мин',
      category: 'Ортодонтия',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      tags: ['брекеты', 'элайнеры', 'прикус']
    },
    {
      title: 'Детская стоматология: когда начинать заботиться о зубах ребенка',
      excerpt: 'Первый визит к стоматологу, уход за молочными зубами, профилактика кариеса у детей. Советы детского стоматолога.',
      author: 'Козлова Елена Михайловна',
      authorRole: 'Детский стоматолог',
      date: '28 февраля 2024',
      readTime: '7 мин',
      category: 'Детская стоматология',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      tags: ['дети', 'молочные зубы', 'профилактика']
    },
    {
      title: 'Отбеливание зубов: виды, эффективность, противопоказания',
      excerpt: 'Профессиональное и домашнее отбеливание зубов. Какой метод выбрать, как подготовиться к процедуре и сохранить результат.',
      author: 'Волков Александр Игоревич',
      authorRole: 'Стоматолог-ортопед',
      date: '20 февраля 2024',
      readTime: '5 мин',
      category: 'Эстетическая стоматология',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      tags: ['отбеливание', 'эстетика', 'улыбка']
    },
    {
      title: 'Заболевания десен: симптомы, лечение, профилактика',
      excerpt: 'Гингивит и пародонтит - распространенные заболевания десен. Как их распознать, лечить и предотвратить.',
      author: 'Морозова Ольга Сергеевна',
      authorRole: 'Врач-пародонтолог',
      date: '15 февраля 2024',
      readTime: '9 мин',
      category: 'Пародонтология',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      tags: ['десны', 'пародонтит', 'гингивит']
    }
  ];

  const categories = [
    'Все статьи',
    'Профилактика',
    'Лечение',
    'Хирургия',
    'Ортодонтия',
    'Детская стоматология',
    'Эстетическая стоматология',
    'Пародонтология'
  ];

  const popularTags = [
    'профилактика', 'имплантация', 'брекеты', 'отбеливание', 
    'кариес', 'гигиена', 'дети', 'протезирование'
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
              <a href="/blog" className="text-blue-600 font-medium">Блог</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Блог</span> о стоматологии
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Полезные статьи от наших врачей о здоровье зубов, современных методах лечения 
            и профилактике стоматологических заболеваний.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Поиск по статьям..."
                className="pl-10 pr-4 py-3 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Search" className="w-5 h-5 mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Articles */}
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

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
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
                        <div className="flex items-center text-sm text-gray-500">
                          <Icon name="Clock" className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
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
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={article.image} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-xs">
                              {article.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{article.author}</p>
                            <p className="text-xs text-gray-500">{article.authorRole}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
                  <Icon name="ChevronDown" className="w-5 h-5 mr-2" />
                  Загрузить еще статьи
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Articles */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Популярные статьи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {articles.slice(0, 4).map((article, index) => (
                    <div key={index} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Icon name="Clock" className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Популярные теги</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-green-500 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Подписка на новости</CardTitle>
                  <CardDescription className="text-blue-100">
                    Получайте новые статьи на email
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
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Есть вопросы?</CardTitle>
                  <CardDescription>
                    Запишитесь на консультацию к нашим врачам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    Записаться на прием
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Нужна персональная консультация?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши врачи ответят на все ваши вопросы и составят индивидуальный план лечения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Позвонить сейчас
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;