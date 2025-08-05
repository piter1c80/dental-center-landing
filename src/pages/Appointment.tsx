import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Appointment = () => {
  const doctors = [
    {
      name: 'Иванов Сергей Петрович',
      specialty: 'Стоматолог-терапевт',
      experience: '15 лет',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      schedule: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт']
    },
    {
      name: 'Петрова Анна Владимировна',
      specialty: 'Стоматолог-хирург',
      experience: '12 лет',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      schedule: ['Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    },
    {
      name: 'Смирнов Дмитрий Алексеевич',
      specialty: 'Ортодонт',
      experience: '10 лет',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      schedule: ['Пн', 'Ср', 'Пт', 'Сб']
    }
  ];

  const timeSlots = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30'
  ];

  const services = [
    'Консультация',
    'Лечение кариеса',
    'Лечение пульпита',
    'Удаление зуба',
    'Имплантация',
    'Протезирование',
    'Ортодонтическое лечение',
    'Детская стоматология',
    'Профессиональная чистка',
    'Отбеливание зубов',
    'Лечение десен'
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
              <a href="/appointment" className="text-blue-600 font-medium">Запись</a>
              <a href="/contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Запись</span> на прием
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Выберите удобное время и врача для посещения нашей клиники. 
            Мы работаем без выходных для вашего удобства.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Онлайн запись</CardTitle>
                  <CardDescription>
                    Заполните форму и мы подтвердим вашу запись в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Личные данные</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Фамилия *</label>
                        <Input placeholder="Ваша фамилия" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                        <Input type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Дата рождения</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Пол</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Выберите пол</option>
                          <option>Мужской</option>
                          <option>Женский</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Услуга</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Выберите услугу *</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Выберите услугу</option>
                        {services.map((service, index) => (
                          <option key={index}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Doctor Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Выбор врача</h3>
                    <div className="grid gap-4">
                      {doctors.map((doctor, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer transition-colors">
                          <div className="flex items-center space-x-4">
                            <input type="radio" name="doctor" className="text-blue-600" />
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={doctor.image} />
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white">
                                {doctor.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                              <p className="text-sm text-gray-600">{doctor.specialty}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {doctor.experience}
                                </Badge>
                                <div className="flex space-x-1">
                                  {doctor.schedule.map((day, idx) => (
                                    <span key={idx} className="text-xs bg-gray-100 px-1 rounded">
                                      {day}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Дата и время</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Предпочтительная дата *</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Время *</label>
                        <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                          {timeSlots.map((time, index) => (
                            <button
                              key={index}
                              className="p-2 text-sm border border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50 transition-colors"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Дополнительная информация</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Жалобы и симптомы</label>
                        <Textarea 
                          placeholder="Опишите ваши жалобы, симптомы или пожелания к лечению..." 
                          rows={4}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="first-visit" className="rounded" />
                        <label htmlFor="first-visit" className="text-sm text-gray-700">
                          Это мой первый визит в клинику
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="allergies" className="rounded" />
                        <label htmlFor="allergies" className="text-sm text-gray-700">
                          У меня есть аллергии на лекарственные препараты
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="reminder" className="rounded" />
                        <label htmlFor="reminder" className="text-sm text-gray-700">
                          Отправить SMS-напоминание за день до приема
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="consent" className="rounded" />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        Согласен на обработку персональных данных *
                      </label>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Icon name="Calendar" className="w-4 h-4 mr-2" />
                      Записаться на прием
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Контакты</CardTitle>
                  <CardDescription>
                    Свяжитесь с нами для записи по телефону
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">+7 (495) 123-45-67</p>
                      <p className="text-sm text-gray-600">Регистратура</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Пн-Пт: 9:00-21:00</p>
                      <p className="text-sm text-gray-600">Сб-Вс: 10:00-18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">ул. Примерная, 123</p>
                      <p className="text-sm text-gray-600">БЦ "Современный", 5 этаж</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency */}
              <Card className="border-0 shadow-lg bg-red-50">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">Экстренная помощь</CardTitle>
                  <CardDescription className="text-red-600">
                    Круглосуточная стоматологическая помощь
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <Icon name="AlertTriangle" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-red-700">+7 (495) 911-11-11</p>
                      <p className="text-red-600">Работает 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Преимущества записи онлайн</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Быстрое подтверждение</p>
                      <p className="text-sm text-gray-600">Ответ в течение 15 минут</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Выбор врача</p>
                      <p className="text-sm text-gray-600">Запись к конкретному специалисту</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">SMS-напоминания</p>
                      <p className="text-sm text-gray-600">Не забудете о приеме</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Скидка 10%</p>
                      <p className="text-sm text-gray-600">На первичную консультацию</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о записи на прием
            </p>
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Как быстро подтверждается запись?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы подтверждаем записи в течение 15 минут в рабочее время. 
                  Вам придет SMS с подтверждением времени приема.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Можно ли перенести запись?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, вы можете перенести запись не позднее чем за 24 часа до приема. 
                  Для этого позвоните в регистратуру или напишите в чат на сайте.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Что взять с собой на прием?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Возьмите с собой паспорт, полис ОМС (если есть), предыдущие снимки зубов 
                  и список принимаемых лекарств (если есть хронические заболевания).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;