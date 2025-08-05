import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Promotions = () => {
  const currentPromotions = [
    {
      title: 'Первичная консультация БЕСПЛАТНО',
      description: 'При записи через сайт консультация врача-стоматолога бесплатно',
      discount: 'БЕСПЛАТНО',
      originalPrice: '1 500 ₽',
      validUntil: '31 декабря 2024',
      conditions: 'При записи через сайт',
      category: 'Консультация',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      isHot: true
    },
    {
      title: 'Семейная скидка 15%',
      description: 'Скидка на лечение для всех членов семьи при записи от 3 человек',
      discount: '-15%',
      originalPrice: 'На все услуги',
      validUntil: 'Постоянно',
      conditions: 'От 3 членов семьи',
      category: 'Семейная',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      isHot: false
    },
    {
      title: 'Комплексное лечение -20%',
      description: 'Скидка при лечении от 5 зубов в рамках одного плана лечения',
      discount: '-20%',
      originalPrice: 'На план лечения',
      validUntil: '15 января 2025',
      conditions: 'От 5 зубов',
      category: 'Лечение',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      isHot: true
    },
    {
      title: 'Отбеливание ZOOM 4',
      description: 'Профессиональное отбеливание зубов со скидкой 30%',
      discount: '-30%',
      originalPrice: '25 000 ₽',
      validUntil: '20 января 2025',
      conditions: 'Новым пациентам',
      category: 'Отбеливание',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      isHot: false
    },
    {
      title: 'Имплантация "под ключ"',
      description: 'Имплант + коронка со скидкой 25 000 рублей',
      discount: '-25 000 ₽',
      originalPrice: '70 000 ₽',
      validUntil: '31 января 2025',
      conditions: 'При оплате сразу',
      category: 'Имплантация',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      isHot: true
    },
    {
      title: 'Детская стоматология',
      description: 'Скидка 20% на все услуги детской стоматологии',
      discount: '-20%',
      originalPrice: 'На все услуги',
      validUntil: '28 февраля 2025',
      conditions: 'Детям до 16 лет',
      category: 'Детская',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      isHot: false
    }
  ];

  const seasonalOffers = [
    {
      title: 'Новогодняя акция',
      description: 'Подарите себе и близким здоровую улыбку',
      discount: 'До -40%',
      period: '1-31 января 2025',
      services: ['Отбеливание', 'Виниры', 'Профчистка'],
      color: 'from-red-500 to-green-500'
    },
    {
      title: 'Весенняя профилактика',
      description: 'Комплексная профилактика полости рта',
      discount: '-25%',
      period: '1 марта - 31 мая 2025',
      services: ['Профчистка', 'Фторирование', 'Герметизация'],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Летняя улыбка',
      description: 'Эстетическая стоматология со скидкой',
      discount: '-30%',
      period: '1 июня - 31 августа 2025',
      services: ['Виниры', 'Отбеливание', 'Реставрация'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const loyaltyProgram = {
    levels: [
      {
        name: 'Бронзовый',
        visits: '1-5 визитов',
        discount: '5%',
        benefits: ['Скидка 5%', 'SMS-напоминания', 'Приоритетная запись']
      },
      {
        name: 'Серебряный',
        visits: '6-15 визитов',
        discount: '10%',
        benefits: ['Скидка 10%', 'Бесплатная консультация', 'Подарки на день рождения']
      },
      {
        name: 'Золотой',
        visits: '16+ визитов',
        discount: '15%',
        benefits: ['Скидка 15%', 'VIP обслуживание', 'Персональный менеджер']
      }
    ]
  };

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
              <a href="/promotions" className="text-blue-600 font-medium">Акции</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Акции</span> и скидки
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Выгодные предложения на стоматологические услуги. Экономьте на лечении 
            без ущерба для качества. Все акции имеют ограниченный срок действия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Gift" className="w-5 h-5 mr-2" />
              Записаться по акции
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Bell" className="w-5 h-5 mr-2" />
              Подписаться на акции
            </Button>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Текущие акции</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Действующие предложения с ограниченным сроком
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPromotions.map((promo, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {promo.isHot && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-red-500 text-white">
                      <Icon name="Flame" className="w-3 h-3 mr-1" />
                      ХИТ
                    </Badge>
                  </div>
                )}
                
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {promo.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{promo.discount}</div>
                      {promo.originalPrice !== promo.discount && (
                        <div className="text-sm text-gray-500 line-through">{promo.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{promo.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {promo.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Действует до:</span>
                      <span className="font-medium text-gray-900">{promo.validUntil}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Условия:</span>
                      <span className="font-medium text-gray-900">{promo.conditions}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    Записаться по акции
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Сезонные предложения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специальные акции в разное время года
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${offer.color} text-white`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-white bg-opacity-20 text-white border-0">
                      Сезонная акция
                    </Badge>
                    <div className="text-3xl font-bold">{offer.discount}</div>
                  </div>
                  <CardTitle className="text-2xl">{offer.title}</CardTitle>
                  <CardDescription className="text-white opacity-90">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Период действия:</p>
                    <p className="opacity-90">{offer.period}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Услуги:</p>
                    <div className="flex flex-wrap gap-2">
                      {offer.services.map((service, idx) => (
                        <Badge key={idx} className="bg-white bg-opacity-20 text-white border-0">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    Узнать подробности
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Программа лояльности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Чем больше визитов, тем больше скидка и привилегий
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {loyaltyProgram.levels.map((level, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${index === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    index === 0 ? 'bg-gradient-to-br from-amber-600 to-amber-700' :
                    index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                    'bg-gradient-to-br from-yellow-400 to-yellow-500'
                  }`}>
                    <Icon name="Award" className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{level.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {level.visits}
                  </CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-2">
                    {level.discount}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {level.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Icon name="Check" className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-blue-600 to-green-500 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Присоединяйтесь к программе лояльности</CardTitle>
                <CardDescription className="text-blue-100">
                  Регистрация бесплатная, привилегии начинают действовать сразу
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="UserPlus" className="w-5 h-5 mr-2" />
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Не пропустите выгодные акции</h2>
          <p className="text-xl mb-8 opacity-90">
            Подпишитесь на рассылку и узнавайте о новых акциях первыми
          </p>
          
          <Card className="bg-white bg-opacity-10 border-0 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-1 text-gray-900"
                />
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  Подписаться
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                Отправляем не чаще 1 раза в неделю. Отписаться можно в любой момент.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Условия акций</h2>
            <p className="text-xl text-gray-600">
              Важная информация об условиях участия в акциях
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Общие условия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="Info" className="w-5 h-5 text-blue-600 mr-2" />
                    Правила участия
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Акции не суммируются с другими скидками</li>
                    <li>• Необходима предварительная запись</li>
                    <li>• Количество мест по акции ограничено</li>
                    <li>• Акция действует только для новых пациентов (если указано)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="Clock" className="w-5 h-5 text-blue-600 mr-2" />
                    Сроки действия
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Акции имеют ограниченный срок действия</li>
                    <li>• Клиника оставляет право изменить условия</li>
                    <li>• Уведомление об изменениях на сайте</li>
                    <li>• Запись по акции до окончания срока</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <p className="text-sm text-gray-500">
                  Подробную информацию об условиях акций уточняйте у администраторов клиники 
                  по телефону +7 (495) 123-45-67 или при записи на прием.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Готовы воспользоваться акцией?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Запишитесь на прием прямо сейчас и получите скидку на лечение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться по акции
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Уточнить условия
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;