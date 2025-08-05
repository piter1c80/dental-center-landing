import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Careers = () => {
  const openPositions = [
    {
      title: 'Стоматолог-терапевт',
      department: 'Терапевтическое отделение',
      type: 'Полная занятость',
      experience: 'От 3 лет',
      salary: 'от 150 000 ₽',
      requirements: [
        'Высшее медицинское образование',
        'Сертификат по стоматологии терапевтической',
        'Опыт работы от 3 лет',
        'Знание современных методов лечения'
      ],
      responsibilities: [
        'Диагностика и лечение кариеса',
        'Эндодонтическое лечение',
        'Художественная реставрация',
        'Работа с микроскопом'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Высокая заработная плата',
        'Обучение за счет клиники',
        'Современное оборудование'
      ]
    },
    {
      title: 'Стоматолог-хирург',
      department: 'Хирургическое отделение',
      type: 'Полная занятость',
      experience: 'От 5 лет',
      salary: 'от 180 000 ₽',
      requirements: [
        'Высшее медицинское образование',
        'Сертификат по челюстно-лицевой хирургии',
        'Опыт имплантации от 5 лет',
        'Сертификаты ведущих производителей'
      ],
      responsibilities: [
        'Хирургические операции',
        'Имплантация зубов',
        'Костная пластика',
        'Синус-лифтинг'
      ],
      benefits: [
        'Высокий доход',
        'Премии за результат',
        'Участие в конференциях',
        'Карьерный рост'
      ]
    },
    {
      title: 'Врач-ортодонт',
      department: 'Ортодонтическое отделение',
      type: 'Полная занятость',
      experience: 'От 2 лет',
      salary: 'от 120 000 ₽',
      requirements: [
        'Высшее медицинское образование',
        'Ординатура по ортодонтии',
        'Опыт работы с брекет-системами',
        'Знание элайнер-терапии'
      ],
      responsibilities: [
        'Диагностика нарушений прикуса',
        'Планирование ортодонтического лечения',
        'Установка и активация брекетов',
        'Работа с элайнерами'
      ],
      benefits: [
        'Стабильный доход',
        'Обучение новым методикам',
        'Современное оборудование',
        'Дружный коллектив'
      ]
    },
    {
      title: 'Детский стоматолог',
      department: 'Детское отделение',
      type: 'Полная занятость',
      experience: 'От 2 лет',
      salary: 'от 100 000 ₽',
      requirements: [
        'Высшее медицинское образование',
        'Специализация по детской стоматологии',
        'Опыт работы с детьми',
        'Знание детской психологии'
      ],
      responsibilities: [
        'Лечение детей от 0 до 18 лет',
        'Профилактические процедуры',
        'Работа с тревожными детьми',
        'Обучение гигиене'
      ],
      benefits: [
        'Работа с детьми',
        'Гибкий график',
        'Обучение и развитие',
        'Социальный пакет'
      ]
    },
    {
      title: 'Администратор',
      department: 'Администрация',
      type: 'Полная занятость',
      experience: 'От 1 года',
      salary: 'от 60 000 ₽',
      requirements: [
        'Среднее специальное образование',
        'Опыт работы в медицине',
        'Знание ПК',
        'Коммуникабельность'
      ],
      responsibilities: [
        'Запись пациентов',
        'Ведение документооборота',
        'Консультирование по услугам',
        'Работа с жалобами'
      ],
      benefits: [
        'Стабильная работа',
        'Обучение за счет компании',
        'Дружный коллектив',
        'Карьерный рост'
      ]
    },
    {
      title: 'Ассистент стоматолога',
      department: 'Лечебное отделение',
      type: 'Полная занятость',
      experience: 'Без опыта',
      salary: 'от 50 000 ₽',
      requirements: [
        'Медицинское образование',
        'Желание работать в стоматологии',
        'Ответственность',
        'Обучаемость'
      ],
      responsibilities: [
        'Подготовка инструментов',
        'Ассистирование врачу',
        'Стерилизация инструментов',
        'Работа с пациентами'
      ],
      benefits: [
        'Обучение с нуля',
        'Перспективы роста',
        'Стабильная зарплата',
        'Медицинская страховка'
      ]
    }
  ];

  const companyBenefits = [
    {
      title: 'Высокая заработная плата',
      description: 'Конкурентная оплата труда выше рыночной',
      icon: 'DollarSign'
    },
    {
      title: 'Профессиональное развитие',
      description: 'Обучение, курсы, конференции за счет клиники',
      icon: 'GraduationCap'
    },
    {
      title: 'Современное оборудование',
      description: 'Работа на лучшем оборудовании мировых брендов',
      icon: 'Monitor'
    },
    {
      title: 'Социальный пакет',
      description: 'ДМС, отпуск, больничные, премии',
      icon: 'Heart'
    },
    {
      title: 'Гибкий график',
      description: 'Возможность выбора удобного графика работы',
      icon: 'Clock'
    },
    {
      title: 'Дружный коллектив',
      description: 'Команда профессионалов и приятная атмосфера',
      icon: 'Users'
    }
  ];

  const workingConditions = [
    {
      title: 'Рабочее место',
      items: ['Современные кабинеты', 'Эргономичная мебель', 'Кондиционирование', 'Естественное освещение']
    },
    {
      title: 'График работы',
      items: ['5/2 или 2/2', 'Гибкое начало смены', 'Без переработок', 'Оплачиваемые больничные']
    },
    {
      title: 'Развитие',
      items: ['Курсы повышения квалификации', 'Участие в конференциях', 'Стажировки', 'Карьерный рост']
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
              <a href="/careers" className="text-blue-600 font-medium">Карьера</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Карьера</span> в DentalCenter
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к команде профессионалов! Мы предлагаем отличные условия работы, 
            возможности для развития и конкурентную заработную плату.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="FileText" className="w-5 h-5 mr-2" />
              Отправить резюме
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Users" className="w-5 h-5 mr-2" />
              О нашей команде
            </Button>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Преимущества работы в нашей клинике
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Открытые вакансии</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные предложения о работе в нашей клинике
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {position.department}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      {position.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{position.title}</CardTitle>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Опыт: {position.experience}</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{position.salary}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Требования:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <Icon name="Check" className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Обязанности:</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <Icon name="ArrowRight" className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Мы предлагаем:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <Icon name="Star" className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Откликнуться на вакансию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Conditions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Условия работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комфортные условия для эффективной работы
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {workingConditions.map((condition, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{condition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {condition.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отправить резюме</h2>
            <p className="text-xl text-gray-600">
              Заполните форму и мы рассмотрим вашу кандидатуру
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Анкета соискателя</CardTitle>
              <CardDescription>
                Расскажите о себе и своем опыте работы
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Желаемая должность *</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Выберите должность</option>
                  <option>Стоматолог-терапевт</option>
                  <option>Стоматолог-хирург</option>
                  <option>Врач-ортодонт</option>
                  <option>Детский стоматолог</option>
                  <option>Администратор</option>
                  <option>Ассистент стоматолога</option>
                  <option>Другая должность</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Образование</label>
                  <Input placeholder="Учебное заведение, специальность" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Опыт работы</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Выберите опыт</option>
                    <option>Без опыта</option>
                    <option>До 1 года</option>
                    <option>1-3 года</option>
                    <option>3-5 лет</option>
                    <option>5-10 лет</option>
                    <option>Более 10 лет</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">О себе</label>
                <Textarea 
                  placeholder="Расскажите о своем опыте работы, достижениях, профессиональных навыках..." 
                  rows={6}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Желаемая зарплата</label>
                <Input placeholder="Укажите желаемый уровень дохода" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Резюме (файл)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Icon name="Upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Перетащите файл сюда или нажмите для выбора</p>
                  <p className="text-sm text-gray-500 mt-1">Поддерживаются форматы: PDF, DOC, DOCX (до 5 МБ)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Согласен на обработку персональных данных *
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить резюме
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Мы рассмотрим вашу заявку в течение 3 рабочих дней
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с корпоративной культурой DentalCenter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Корпоративные ценности</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Забота о пациентах</h4>
                    <p className="text-gray-600 text-sm">Каждый пациент для нас особенный</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Командная работа</h4>
                    <p className="text-gray-600 text-sm">Взаимопомощь и поддержка коллег</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Постоянное развитие</h4>
                    <p className="text-gray-600 text-sm">Обучение и повышение квалификации</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Профессионализм</h4>
                    <p className="text-gray-600 text-sm">Высокие стандарты качества</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Статистика команды</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-sm opacity-90">сотрудников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-sm opacity-90">лет средний стаж</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-90">довольны работой</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-sm opacity-90">курсов в год</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Готовы присоединиться к нашей команде?</h2>
          <p className="text-xl mb-8 opacity-90">
            Отправьте резюме или свяжитесь с нами для получения дополнительной информации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="FileText" className="w-5 h-5 mr-2" />
              Отправить резюме
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Связаться с HR
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;