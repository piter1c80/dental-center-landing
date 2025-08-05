import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Insurance = () => {
  const insuranceCompanies = [
    {
      name: 'СОГАЗ-Мед',
      logo: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      coverage: 'Полное покрытие',
      services: ['Консультации', 'Лечение кариеса', 'Удаление зубов', 'Протезирование'],
      contact: '+7 (495) 123-11-11'
    },
    {
      name: 'ВТБ Медицинское страхование',
      logo: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      coverage: 'Расширенное покрытие',
      services: ['Все виды лечения', 'Имплантация', 'Ортодонтия', 'Эстетическая стоматология'],
      contact: '+7 (495) 123-22-22'
    },
    {
      name: 'АльфаСтрахование',
      logo: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      coverage: 'Базовое покрытие',
      services: ['Консультации', 'Лечение', 'Профилактика', 'Детская стоматология'],
      contact: '+7 (495) 123-33-33'
    },
    {
      name: 'РЕСО-Гарантия',
      logo: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      coverage: 'Премиум покрытие',
      services: ['VIP обслуживание', 'Все виды лечения', 'Седация', 'Срочная помощь'],
      contact: '+7 (495) 123-44-44'
    },
    {
      name: 'Ингосстрах',
      logo: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      coverage: 'Стандартное покрытие',
      services: ['Терапия', 'Хирургия', 'Ортопедия', 'Пародонтология'],
      contact: '+7 (495) 123-55-55'
    },
    {
      name: 'Росгосстрах',
      logo: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      coverage: 'Полное покрытие',
      services: ['Все направления', 'Семейные программы', 'Корпоративное обслуживание'],
      contact: '+7 (495) 123-66-66'
    }
  ];

  const governmentPrograms = [
    {
      title: 'ОМС (Обязательное медицинское страхование)',
      description: 'Базовые стоматологические услуги по полису ОМС',
      services: ['Консультации', 'Лечение кариеса', 'Удаление зубов', 'Протезирование (частично)'],
      requirements: 'Полис ОМС, паспорт, СНИЛС'
    },
    {
      title: 'Программа "Здоровье"',
      description: 'Государственная программа для льготных категорий граждан',
      services: ['Бесплатное лечение', 'Протезирование', 'Профилактика'],
      requirements: 'Справка о льготах, паспорт, полис ОМС'
    },
    {
      title: 'Детская стоматология',
      description: 'Бесплатное лечение детей до 18 лет',
      services: ['Все виды лечения', 'Профилактика', 'Ортодонтия (по показаниям)'],
      requirements: 'Свидетельство о рождении, полис ОМС'
    }
  ];

  const benefits = [
    {
      title: 'Экономия средств',
      description: 'Покрытие до 100% стоимости лечения',
      icon: 'DollarSign'
    },
    {
      title: 'Качественное лечение',
      description: 'Доступ к лучшим врачам и технологиям',
      icon: 'Award'
    },
    {
      title: 'Приоритетная запись',
      description: 'Запись без очереди для держателей полисов',
      icon: 'Clock'
    },
    {
      title: 'Комплексный подход',
      description: 'Полное обследование и план лечения',
      icon: 'Shield'
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
              <a href="/insurance" className="text-blue-600 font-medium">Страхование</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Страхование</span> и ДМС
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Мы работаем с ведущими страховыми компаниями и государственными программами. 
            Получите качественное стоматологическое лечение по полису ДМС или ОМС.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="FileText" className="w-5 h-5 mr-2" />
              Проверить полис
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Список услуг ДМС
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Преимущества лечения по страховке</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Почему стоит использовать полис ДМС для стоматологического лечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Insurance Companies */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Страховые компании-партнеры</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы работаем с ведущими страховыми компаниями России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceCompanies.map((company, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <Badge variant="secondary" className="bg-green-50 text-green-700">
                        {company.coverage}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Покрываемые услуги:</h4>
                    <ul className="space-y-1">
                      {company.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{company.contact}</span>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Государственные программы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Бесплатное и льготное стоматологическое лечение
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {governmentPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Shield" className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Включенные услуги:</h4>
                    <ul className="space-y-1">
                      {program.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Необходимые документы:</h4>
                    <p className="text-sm text-gray-600">{program.requirements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Check */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Проверьте свой полис</h2>
          <p className="text-xl mb-8 opacity-90">
            Узнайте, какие услуги покрывает ваша страховка
          </p>
          
          <Card className="bg-white bg-opacity-10 border-0 text-white max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Проверка полиса ДМС</CardTitle>
              <CardDescription className="text-blue-100">
                Введите данные вашего полиса для проверки покрытия
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Страховая компания</label>
                <select className="w-full px-4 py-2 rounded-lg text-gray-900">
                  <option>Выберите страховую компанию</option>
                  <option>СОГАЗ-Мед</option>
                  <option>ВТБ Медицинское страхование</option>
                  <option>АльфаСтрахование</option>
                  <option>РЕСО-Гарантия</option>
                  <option>Ингосстрах</option>
                  <option>Росгосстрах</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Номер полиса</label>
                <Input 
                  placeholder="Введите номер полиса"
                  className="text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ФИО застрахованного</label>
                <Input 
                  placeholder="Фамилия Имя Отчество"
                  className="text-gray-900"
                />
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                <Icon name="Search" className="w-4 h-4 mr-2" />
                Проверить полис
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как получить лечение по ДМС</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой алгоритм получения стоматологических услуг по страховке
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Проверка полиса</h3>
              <p className="text-gray-600 text-sm">
                Проверяем действительность полиса и покрываемые услуги
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Запись на прием</h3>
              <p className="text-gray-600 text-sm">
                Записываемся на удобное время к нужному специалисту
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Консультация</h3>
              <p className="text-gray-600 text-sm">
                Врач проводит осмотр и составляет план лечения
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Лечение</h3>
              <p className="text-gray-600 text-sm">
                Получаете качественное лечение с минимальными доплатами
              </p>
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
              Ответы на популярные вопросы о страховании
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Какие документы нужны для лечения по ДМС?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Для лечения по ДМС необходимы: полис ДМС, паспорт, направление от страховой компании (если требуется). 
                  Некоторые компании требуют предварительное согласование лечения.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Покрывает ли ДМС имплантацию зубов?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Покрытие имплантации зависит от программы ДМС. Премиум программы обычно включают имплантацию, 
                  базовые программы - нет. Уточняйте условия в своей страховой компании.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Можно ли лечиться по ОМС в частной клинике?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, если частная клиника работает в системе ОМС. Мы принимаем полисы ОМС 
                  для базовых стоматологических услуг согласно территориальной программе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Готовы воспользоваться страховкой?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Запишитесь на прием и получите качественное лечение по полису ДМС или ОМС
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться по ДМС
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Уточнить покрытие
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;