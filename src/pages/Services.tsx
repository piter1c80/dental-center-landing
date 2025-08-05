import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      title: 'Терапевтическая стоматология',
      description: 'Лечение кариеса, пульпита, периодонтита с использованием современных материалов',
      icon: 'Zap',
      price: 'от 3 500 ₽',
      procedures: ['Лечение кариеса', 'Лечение пульпита', 'Реставрация зубов', 'Эндодонтическое лечение']
    },
    {
      title: 'Хирургическая стоматология',
      description: 'Удаление зубов, имплантация, костная пластика любой сложности',
      icon: 'Scissors',
      price: 'от 2 500 ₽',
      procedures: ['Удаление зубов', 'Имплантация', 'Костная пластика', 'Синус-лифтинг']
    },
    {
      title: 'Ортопедическая стоматология',
      description: 'Протезирование зубов коронками, мостами, съемными протезами',
      icon: 'Crown',
      price: 'от 15 000 ₽',
      procedures: ['Коронки', 'Мостовидные протезы', 'Съемные протезы', 'Виниры']
    },
    {
      title: 'Ортодонтия',
      description: 'Исправление прикуса брекетами, элайнерами, съемными аппаратами',
      icon: 'Smile',
      price: 'от 80 000 ₽',
      procedures: ['Брекеты', 'Элайнеры', 'Пластинки', 'Ретейнеры']
    },
    {
      title: 'Детская стоматология',
      description: 'Специализированное лечение зубов у детей с психологическим подходом',
      icon: 'Baby',
      price: 'от 2 000 ₽',
      procedures: ['Лечение молочных зубов', 'Профилактика', 'Герметизация фиссур', 'Фторирование']
    },
    {
      title: 'Пародонтология',
      description: 'Лечение заболеваний десен и тканей, окружающих зуб',
      icon: 'Heart',
      price: 'от 5 000 ₽',
      procedures: ['Лечение гингивита', 'Лечение пародонтита', 'Кюретаж', 'Шинирование']
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
              <a href="/services" className="text-blue-600 font-medium">Услуги</a>
              <a href="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors">Врачи</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
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
            Наши <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">услуги</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Полный спектр стоматологических услуг для всей семьи. Современное оборудование, 
            опытные врачи и индивидуальный подход к каждому пациенту.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Icon name={service.icon} className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-semibold text-lg px-4 py-2">
                        {service.price}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Основные процедуры:</h4>
                      <ul className="space-y-2">
                        {service.procedures.map((procedure, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                            {procedure}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Записаться на консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на бесплатную консультацию и получите индивидуальный план лечения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться онлайн
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

export default Services;