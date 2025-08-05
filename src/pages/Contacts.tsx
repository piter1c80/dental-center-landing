import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      title: 'Адрес клиники',
      content: 'г. Москва, ул. Примерная, д. 123\nБЦ "Современный", 5 этаж',
      icon: 'MapPin'
    },
    {
      title: 'Телефоны',
      content: '+7 (495) 123-45-67\n+7 (901) 234-56-78',
      icon: 'Phone'
    },
    {
      title: 'Email',
      content: 'info@dentalcenter.ru\nrecord@dentalcenter.ru',
      icon: 'Mail'
    },
    {
      title: 'Время работы',
      content: 'Пн-Пт: 9:00 - 21:00\nСб-Вс: 10:00 - 18:00',
      icon: 'Clock'
    }
  ];

  const departments = [
    {
      name: 'Регистратура',
      phone: '+7 (495) 123-45-67',
      description: 'Запись на прием, информация о услугах'
    },
    {
      name: 'Администратор',
      phone: '+7 (495) 123-45-68',
      description: 'Вопросы по лечению, документооборот'
    },
    {
      name: 'Главный врач',
      phone: '+7 (495) 123-45-69',
      description: 'Консультации по сложным случаям'
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
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
              <a href="/contacts" className="text-blue-600 font-medium">Контакты</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Контакты</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы 
            и помочь записаться на прием.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 whitespace-pre-line">
                    {info.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Записаться на прием</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Фамилия *</label>
                    <Input placeholder="Ваша фамилия" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Услуга</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Выберите услугу</option>
                    <option>Консультация</option>
                    <option>Лечение кариеса</option>
                    <option>Имплантация</option>
                    <option>Отбеливание</option>
                    <option>Ортодонтия</option>
                    <option>Профилактика</option>
                    <option>Детская стоматология</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Предпочтительное время</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="date" />
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Время</option>
                      <option>9:00 - 12:00</option>
                      <option>12:00 - 15:00</option>
                      <option>15:00 - 18:00</option>
                      <option>18:00 - 21:00</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Комментарий</label>
                  <Textarea placeholder="Опишите ваши пожелания или вопросы" rows={4} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Departments */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Отделы клиники</CardTitle>
                  <CardDescription>
                    Прямые номера для быстрой связи
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                        <p className="text-blue-600 font-medium">{dept.phone}</p>
                        <p className="text-sm text-gray-600">{dept.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Emergency */}
              <Card className="border-0 shadow-lg bg-red-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-700">Экстренная помощь</CardTitle>
                  <CardDescription className="text-red-600">
                    Круглосуточная стоматологическая помощь
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <Icon name="AlertTriangle" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-700">+7 (495) 911-11-11</p>
                      <p className="text-red-600">Работает 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Мы в социальных сетях</CardTitle>
                  <CardDescription>
                    Следите за новостями и полезными советами
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button size="lg" variant="outline" className="border-gray-300 hover:border-blue-500 hover:text-blue-500">
                      <Icon name="Instagram" className="w-5 h-5 mr-2" />
                      Instagram
                    </Button>
                    <Button size="lg" variant="outline" className="border-gray-300 hover:border-blue-500 hover:text-blue-500">
                      <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                      Telegram
                    </Button>
                    <Button size="lg" variant="outline" className="border-gray-300 hover:border-blue-500 hover:text-blue-500">
                      <Icon name="Facebook" className="w-5 h-5 mr-2" />
                      VK
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как нас найти</h2>
            <p className="text-xl text-gray-600">
              Мы находимся в центре города, рядом с метро
            </p>
          </div>
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Интерактивная карта</p>
                <p className="text-sm text-gray-500">г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
          </Card>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="Train" className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Метро</h4>
              <p className="text-gray-600">5 минут от ст. м. "Примерная"</p>
            </div>
            <div className="text-center">
              <Icon name="Car" className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Парковка</h4>
              <p className="text-gray-600">Бесплатная подземная парковка</p>
            </div>
            <div className="text-center">
              <Icon name="Bus" className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Транспорт</h4>
              <p className="text-gray-600">Автобусы 15, 23, 45</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;