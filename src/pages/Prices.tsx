import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const priceCategories = [
    {
      title: 'Терапевтическая стоматология',
      icon: 'Zap',
      services: [
        { name: 'Консультация врача-стоматолога', price: '1 500 ₽' },
        { name: 'Лечение кариеса (1 поверхность)', price: '3 500 ₽' },
        { name: 'Лечение кариеса (2 поверхности)', price: '4 500 ₽' },
        { name: 'Лечение кариеса (3+ поверхности)', price: '5 500 ₽' },
        { name: 'Лечение пульпита (1-канальный зуб)', price: '8 000 ₽' },
        { name: 'Лечение пульпита (2-канальный зуб)', price: '10 000 ₽' },
        { name: 'Лечение пульпита (3-канальный зуб)', price: '12 000 ₽' },
        { name: 'Лечение периодонтита', price: 'от 9 000 ₽' },
        { name: 'Художественная реставрация', price: 'от 8 000 ₽' }
      ]
    },
    {
      title: 'Хирургическая стоматология',
      icon: 'Scissors',
      services: [
        { name: 'Удаление простое', price: '2 500 ₽' },
        { name: 'Удаление сложное', price: '4 500 ₽' },
        { name: 'Удаление зуба мудрости', price: '6 000 ₽' },
        { name: 'Имплантация (Nobel Biocare)', price: '45 000 ₽' },
        { name: 'Имплантация (Straumann)', price: '50 000 ₽' },
        { name: 'Костная пластика', price: 'от 25 000 ₽' },
        { name: 'Синус-лифтинг закрытый', price: '20 000 ₽' },
        { name: 'Синус-лифтинг открытый', price: '35 000 ₽' },
        { name: 'Формирователь десны', price: '3 000 ₽' }
      ]
    },
    {
      title: 'Ортопедическая стоматология',
      icon: 'Crown',
      services: [
        { name: 'Коронка металлокерамическая', price: '15 000 ₽' },
        { name: 'Коронка керамическая E-max', price: '25 000 ₽' },
        { name: 'Коронка циркониевая', price: '30 000 ₽' },
        { name: 'Винир керамический', price: '35 000 ₽' },
        { name: 'Мостовидный протез (за единицу)', price: '18 000 ₽' },
        { name: 'Съемный протез частичный', price: '25 000 ₽' },
        { name: 'Съемный протез полный', price: '35 000 ₽' },
        { name: 'Протез на имплантах', price: 'от 80 000 ₽' },
        { name: 'Абатмент стандартный', price: '8 000 ₽' }
      ]
    },
    {
      title: 'Ортодонтия',
      icon: 'Smile',
      services: [
        { name: 'Консультация ортодонта', price: '2 000 ₽' },
        { name: 'Брекеты металлические', price: '80 000 ₽' },
        { name: 'Брекеты керамические', price: '120 000 ₽' },
        { name: 'Брекеты сапфировые', price: '150 000 ₽' },
        { name: 'Лингвальные брекеты', price: '200 000 ₽' },
        { name: 'Элайнеры Invisalign', price: '250 000 ₽' },
        { name: 'Съемная пластинка', price: '15 000 ₽' },
        { name: 'Ретейнер несъемный', price: '8 000 ₽' },
        { name: 'Активация брекетов', price: '3 000 ₽' }
      ]
    },
    {
      title: 'Детская стоматология',
      icon: 'Baby',
      services: [
        { name: 'Консультация детского стоматолога', price: '1 200 ₽' },
        { name: 'Лечение кариеса молочного зуба', price: '2 500 ₽' },
        { name: 'Лечение пульпита молочного зуба', price: '4 000 ₽' },
        { name: 'Удаление молочного зуба', price: '1 500 ₽' },
        { name: 'Герметизация фиссур', price: '2 000 ₽' },
        { name: 'Фторирование зубов', price: '1 500 ₽' },
        { name: 'Профессиональная чистка детям', price: '3 000 ₽' },
        { name: 'Коронка на молочный зуб', price: '8 000 ₽' },
        { name: 'Седация закисью азота', price: '3 000 ₽' }
      ]
    },
    {
      title: 'Пародонтология и гигиена',
      icon: 'Heart',
      services: [
        { name: 'Консультация пародонтолога', price: '1 500 ₽' },
        { name: 'Профессиональная чистка', price: '5 000 ₽' },
        { name: 'Ультразвуковая чистка', price: '3 000 ₽' },
        { name: 'Air Flow', price: '3 500 ₽' },
        { name: 'Кюретаж закрытый (1 зуб)', price: '1 500 ₽' },
        { name: 'Кюретаж открытый (1 зуб)', price: '3 000 ₽' },
        { name: 'Лоскутная операция', price: '15 000 ₽' },
        { name: 'Шинирование зубов', price: 'от 8 000 ₽' },
        { name: 'Отбеливание ZOOM 4', price: '25 000 ₽' }
      ]
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
              <a href="/prices" className="text-blue-600 font-medium">Цены</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Цены</span> на услуги
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Прозрачная система ценообразования без скрытых платежей. 
            Все цены указаны с учетом материалов и работы врача.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Calculator" className="w-5 h-5 mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {priceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Icon name={category.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>
                        {category.services.length} услуг в категории
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700 text-sm">{service.name}</span>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-semibold">
                          {service.price}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Icon name="Calendar" className="w-4 h-4 mr-2" />
                      Записаться на консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Специальные предложения</h2>
            <p className="text-xl text-gray-600">
              Выгодные акции и скидки для наших пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Percent" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-2xl">Первичная консультация</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-2">БЕСПЛАТНО</div>
                <p className="opacity-90 mb-4">
                  При записи через сайт консультация врача-стоматолога бесплатно
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-2xl">Семейная скидка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-2">-15%</div>
                <p className="opacity-90 mb-4">
                  Скидка на лечение для всех членов семьи при записи от 3 человек
                </p>
                <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-2xl">Комплексное лечение</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-2">-20%</div>
                <p className="opacity-90 mb-4">
                  Скидка при лечении от 5 зубов в рамках одного плана лечения
                </p>
                <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Способы оплаты</h2>
            <p className="text-xl text-gray-600">
              Удобные варианты оплаты для вашего комфорта
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Банковские карты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visa, MasterCard, МИР
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Banknote" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Наличные</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Оплата в кассе клиники
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Рассрочка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  0% на срок до 12 месяцев
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Страховка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ДМС и государственные программы
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о ценах и оплате
            </p>
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Входит ли анестезия в стоимость лечения?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, местная анестезия включена в стоимость всех лечебных процедур. 
                  Дополнительно оплачивается только седация закисью азота.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Можно ли получить рассрочку на лечение?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы предоставляем беспроцентную рассрочку на срок до 12 месяцев 
                  для лечения стоимостью от 30 000 рублей.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 text-blue-600 mr-2" />
                  Предоставляете ли вы гарантию на лечение?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы предоставляем гарантию: на пломбы - 2 года, на коронки - 3 года, 
                  на имплантацию - 10 лет при соблюдении рекомендаций врача.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Нужна точная стоимость лечения?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на бесплатную консультацию и получите индивидуальный план лечения с точными ценами
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Icon name="Calculator" className="w-5 h-5 mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Prices;