import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'Елена Михайловна',
      age: '45 лет',
      service: 'Имплантация',
      rating: 5,
      date: '15 марта 2024',
      text: 'Делала имплантацию у доктора Петровой. Очень довольна результатом! Операция прошла безболезненно, врач все подробно объяснила. Через 3 месяца поставили коронку - зуб как родной. Рекомендую эту клинику всем!',
      avatar: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      name: 'Александр Петров',
      age: '32 года',
      service: 'Лечение кариеса',
      rating: 5,
      date: '8 марта 2024',
      text: 'Лечил кариес у доктора Иванова. Профессионал своего дела! Использовал микроскоп, все сделал аккуратно и качественно. Анестезия подействовала отлично, ничего не чувствовал. Цены адекватные, качество на высоте.',
      avatar: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    },
    {
      name: 'Мария Сергеевна',
      age: '28 лет',
      service: 'Ортодонтическое лечение',
      rating: 5,
      date: '1 марта 2024',
      text: 'Исправляла прикус брекетами у доктора Смирнова. Лечение длилось 1,5 года, результат превосходный! Врач очень внимательный, всегда объяснял что происходит. Персонал вежливый, в клинике чисто и уютно.',
      avatar: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    },
    {
      name: 'Дмитрий Козлов',
      age: '41 год',
      service: 'Протезирование',
      rating: 5,
      date: '22 февраля 2024',
      text: 'Ставил коронки на передние зубы у доктора Волкова. Результат превзошел все ожидания! Зубы выглядят естественно, никто не замечает что это коронки. Работа выполнена на высшем уровне, спасибо большое!',
      avatar: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    },
    {
      name: 'Анна Владимировна',
      age: '35 лет',
      service: 'Детская стоматология',
      rating: 5,
      date: '18 февраля 2024',
      text: 'Водила дочку (7 лет) к доктору Козловой. Ребенок боялся стоматологов, но врач нашла подход - рассказывала сказки, показывала мультики. Лечение прошло без слез, дочка даже просит еще прийти к "доброму доктору"!',
      avatar: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      name: 'Сергей Николаевич',
      age: '52 года',
      service: 'Пародонтология',
      rating: 5,
      date: '10 февраля 2024',
      text: 'Лечил пародонтит у доктора Морозовой. Использовали лазерную терапию - очень эффективно! Десны перестали кровоточить, воспаление прошло. Врач дала подробные рекомендации по уходу. Очень благодарен!',
      avatar: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    },
    {
      name: 'Ольга Петровна',
      age: '39 лет',
      service: 'Отбеливание зубов',
      rating: 5,
      date: '5 февраля 2024',
      text: 'Делала отбеливание ZOOM 4. Результат потрясающий - зубы стали на 6 тонов светлее! Процедура комфортная, никаких болезненных ощущений. Врач предупредил о всех нюансах, дал рекомендации по уходу.',
      avatar: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      name: 'Михаил Андреевич',
      age: '47 лет',
      service: 'Комплексное лечение',
      rating: 5,
      date: '28 января 2024',
      text: 'Проходил комплексное лечение - удаление, имплантация, протезирование. Весь процесс занял 6 месяцев. Врачи работали слаженно, все этапы прошли по плану. Результат отличный, жую как в молодости!',
      avatar: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    },
    {
      name: 'Татьяна Ивановна',
      age: '43 года',
      service: 'Профессиональная чистка',
      rating: 5,
      date: '20 января 2024',
      text: 'Регулярно делаю профессиональную чистку в этой клинике. Гигиенист очень аккуратная, использует современное оборудование. После чистки зубы гладкие, белые. Всегда дают рекомендации по домашнему уходу.',
      avatar: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    }
  ];

  const stats = [
    { value: '4.9', label: 'Средняя оценка', icon: 'Star' },
    { value: '1247', label: 'Отзывов', icon: 'MessageSquare' },
    { value: '98%', label: 'Рекомендуют', icon: 'ThumbsUp' },
    { value: '15000+', label: 'Пациентов', icon: 'Users' }
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
              <a href="/reviews" className="text-blue-600 font-medium">Отзывы</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Отзывы</span> пациентов
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Мнения реальных пациентов о качестве нашей работы. 
            Мы ценим каждый отзыв и стремимся становиться лучше.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <CardDescription className="text-gray-600 font-medium">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-lg">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{review.age}</span>
                        <Badge variant="secondary" className="text-xs">
                          {review.service}
                        </Badge>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                      <Icon name="ThumbsUp" className="w-4 h-4" />
                      <span>Полезно</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                      <Icon name="MessageCircle" className="w-4 h-4" />
                      <span>Ответить</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="ChevronDown" className="w-5 h-5 mr-2" />
              Показать еще отзывы
            </Button>
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Оставить отзыв</h2>
            <p className="text-xl text-gray-600">
              Поделитесь своим опытом лечения в нашей клинике
            </p>
          </div>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Ваш отзыв</CardTitle>
              <CardDescription>
                Ваше мнение поможет другим пациентам сделать правильный выбор
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Возраст</label>
                  <Input placeholder="Ваш возраст" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Услуга *</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Выберите услугу</option>
                  <option>Лечение кариеса</option>
                  <option>Имплантация</option>
                  <option>Протезирование</option>
                  <option>Ортодонтическое лечение</option>
                  <option>Детская стоматология</option>
                  <option>Пародонтология</option>
                  <option>Профессиональная чистка</option>
                  <option>Отбеливание</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Оценка *</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-gray-300 hover:text-yellow-400 transition-colors">
                      <Icon name="Star" className="w-8 h-8" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Отзыв *</label>
                <Textarea 
                  placeholder="Расскажите о своем опыте лечения в нашей клинике..." 
                  rows={6}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="consent" className="rounded" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Согласен на обработку персональных данных и публикацию отзыва
                </label>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <Icon name="Send" className="w-4 h-4 mr-2" />
                Отправить отзыв
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* External Reviews */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Мы на других платформах</h2>
            <p className="text-xl text-gray-600">
              Читайте отзывы о нас на популярных сервисах
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Яндекс.Карты</CardTitle>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription>4.8 из 5 (234 отзыва)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>2ГИС</CardTitle>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription>4.9 из 5 (156 отзывов)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Google</CardTitle>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription>4.7 из 5 (89 отзывов)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageSquare" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>ПроДокторов</CardTitle>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription>4.9 из 5 (67 отзывов)</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Станьте нашим довольным пациентом</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам пациентов, которые доверили нам свое здоровье
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Icon name="Calendar" className="w-5 h-5 mr-2" />
            Записаться на прием
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;