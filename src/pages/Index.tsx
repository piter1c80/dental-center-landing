import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: 'Лечение кариеса',
      description: 'Современные методы лечения без боли',
      icon: 'Zap',
      price: 'от 3 500 ₽'
    },
    {
      title: 'Имплантация',
      description: 'Установка качественных имплантов',
      icon: 'Settings',
      price: 'от 35 000 ₽'
    },
    {
      title: 'Отбеливание',
      description: 'Профессиональное отбеливание зубов',
      icon: 'Sparkles',
      price: 'от 15 000 ₽'
    },
    {
      title: 'Ортодонтия',
      description: 'Исправление прикуса и выравнивание',
      icon: 'Smile',
      price: 'от 80 000 ₽'
    }
  ];

  const doctors = [
    {
      name: 'Иванов Сергей Петрович',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    },
    {
      name: 'Петрова Анна Владимировна',
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет опыта',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      name: 'Смирнов Дмитрий Алексеевич',
      specialty: 'Ортодонт',
      experience: '10 лет опыта',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Елена М.',
      text: 'Отличная клиника! Врачи профессионалы, современное оборудование. Лечила кариес - все прошло безболезненно.',
      rating: 5
    },
    {
      name: 'Александр К.',
      text: 'Делал имплантацию у доктора Петровой. Результат превосходный, никаких осложнений. Рекомендую!',
      rating: 5
    },
    {
      name: 'Мария С.',
      text: 'Прохожу ортодонтическое лечение. Очень довольна отношением персонала и качеством услуг.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Icon name="Smile" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">DentalCenter</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#doctors" className="text-gray-600 hover:text-blue-600 transition-colors">Врачи</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
              <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Современная
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> стоматология</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Качественное лечение зубов без боли и стресса. Опытные врачи, современное оборудование 
            и индивидуальный подход к каждому пациенту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на приём
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 px-8 py-4 text-lg">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Позвонить сейчас
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">5000+</div>
              <div className="text-gray-600">довольных пациентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-600">гарантия качества</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр стоматологических услуг с использованием современных технологий
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-semibold">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши врачи</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Команда профессионалов с многолетним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={doctor.image} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-2xl">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    {doctor.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены на услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачная система ценообразования без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Терапевтическая стоматология</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Лечение кариеса</span>
                  <Badge variant="secondary">от 3 500 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Лечение пульпита</span>
                  <Badge variant="secondary">от 8 000 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Профессиональная чистка</span>
                  <Badge variant="secondary">от 5 000 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Отбеливание зубов</span>
                  <Badge variant="secondary">от 15 000 ₽</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Хирургическая стоматология</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Удаление зуба</span>
                  <Badge variant="secondary">от 2 500 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Имплантация</span>
                  <Badge variant="secondary">от 35 000 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Костная пластика</span>
                  <Badge variant="secondary">от 25 000 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ортодонтическое лечение</span>
                  <Badge variant="secondary">от 80 000 ₽</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы пациентов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас наши пациенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для записи на приём
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123<br />БЦ "Современный", 5 этаж</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67<br />+7 (901) 234-56-78</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Время работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 21:00<br />Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Записаться на приём</CardTitle>
                <CardDescription className="text-center">
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Услуга</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Выберите услугу</option>
                    <option>Лечение кариеса</option>
                    <option>Имплантация</option>
                    <option>Отбеливание</option>
                    <option>Ортодонтия</option>
                    <option>Профилактика</option>
                  </select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Icon name="Smile" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">DentalCenter</span>
              </div>
              <p className="text-gray-400 mb-4">
                Современная стоматологическая клиника с индивидуальным подходом к каждому пациенту.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Лечение кариеса</li>
                <li>Имплантация</li>
                <li>Отбеливание</li>
                <li>Ортодонтия</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@dentalcenter.ru</li>
                <li>ул. Примерная, д. 123</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Instagram" className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Facebook" className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="MessageCircle" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 DentalCenter. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;