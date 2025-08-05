import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'Общие вопросы',
      icon: 'HelpCircle',
      questions: [
        {
          question: 'Как записаться на прием?',
          answer: 'Записаться на прием можно несколькими способами: через форму на сайте, по телефону +7 (495) 123-45-67, через мессенджеры или лично в клинике. Мы работаем без выходных.'
        },
        {
          question: 'Какие документы нужны для первого визита?',
          answer: 'Для первого визита возьмите с собой паспорт, полис ОМС (если есть), предыдущие рентгеновские снимки зубов и список принимаемых лекарств (при наличии хронических заболеваний).'
        },
        {
          question: 'Сколько длится первичная консультация?',
          answer: 'Первичная консультация длится 30-45 минут. За это время врач проведет осмотр, при необходимости сделает снимки и составит план лечения.'
        },
        {
          question: 'Можно ли перенести запись?',
          answer: 'Да, запись можно перенести не позднее чем за 24 часа до назначенного времени. Для этого позвоните в регистратуру или напишите в чат на сайте.'
        }
      ]
    },
    {
      title: 'Лечение и процедуры',
      icon: 'Zap',
      questions: [
        {
          question: 'Больно ли лечить зубы?',
          answer: 'Современная анестезия позволяет проводить лечение абсолютно безболезненно. Мы используем качественные анестетики и при необходимости предлагаем седацию закисью азота.'
        },
        {
          question: 'Сколько времени занимает лечение кариеса?',
          answer: 'Лечение кариеса обычно занимает 1-1,5 часа в зависимости от сложности случая. Глубокий кариес может потребовать нескольких визитов.'
        },
        {
          question: 'Что такое лечение под микроскопом?',
          answer: 'Лечение под микроскопом позволяет врачу видеть мельчайшие детали, что обеспечивает более точную диагностику и качественное лечение с минимальным вмешательством.'
        },
        {
          question: 'Как долго служат пломбы?',
          answer: 'Современные композитные пломбы служат 5-10 лет при правильном уходе. Мы даем гарантию 2 года на все пломбы.'
        }
      ]
    },
    {
      title: 'Имплантация',
      icon: 'Settings',
      questions: [
        {
          question: 'Больно ли ставить импланты?',
          answer: 'Установка импланта проходит под местной анестезией и не вызывает болевых ощущений. После операции возможен небольшой дискомфорт, который легко снимается обезболивающими.'
        },
        {
          question: 'Сколько времени занимает имплантация?',
          answer: 'Установка одного импланта занимает 30-60 минут. Полный процесс от установки до протезирования составляет 3-6 месяцев в зависимости от клинической ситуации.'
        },
        {
          question: 'Какие импланты вы используете?',
          answer: 'Мы работаем с ведущими производителями: Nobel Biocare, Straumann, Astra Tech. Все импланты имеют пожизненную гарантию производителя.'
        },
        {
          question: 'Есть ли противопоказания к имплантации?',
          answer: 'Абсолютных противопоказаний немного: онкология, тяжелые заболевания сердца, некомпенсированный диабет. Большинство относительных противопоказаний можно устранить.'
        }
      ]
    },
    {
      title: 'Ортодонтия',
      icon: 'Smile',
      questions: [
        {
          question: 'В каком возрасте лучше ставить брекеты?',
          answer: 'Оптимальный возраст для установки брекетов - 12-14 лет, когда завершается смена зубов. Однако исправлять прикус можно в любом возрасте.'
        },
        {
          question: 'Сколько носить брекеты?',
          answer: 'Средний срок ношения брекетов составляет 1,5-2 года. Сложные случаи могут потребовать до 3 лет лечения.'
        },
        {
          question: 'Чем элайнеры отличаются от брекетов?',
          answer: 'Элайнеры - это прозрачные съемные капы. Они незаметны, комфортны в ношении, но подходят не для всех случаев и стоят дороже брекетов.'
        },
        {
          question: 'Нужно ли носить ретейнеры после брекетов?',
          answer: 'Да, ретейнеры необходимы для закрепления результата. Их носят минимум столько же времени, сколько длилось активное лечение.'
        }
      ]
    },
    {
      title: 'Детская стоматология',
      icon: 'Baby',
      questions: [
        {
          question: 'С какого возраста нужно показывать ребенка стоматологу?',
          answer: 'Первый визит к стоматологу рекомендуется в 1 год или через 6 месяцев после прорезывания первого зуба. Далее - каждые 6 месяцев для профилактики.'
        },
        {
          question: 'Нужно ли лечить молочные зубы?',
          answer: 'Обязательно! Кариес молочных зубов может привести к проблемам с постоянными зубами, нарушению прикуса и инфекционным осложнениям.'
        },
        {
          question: 'Как подготовить ребенка к визиту?',
          answer: 'Расскажите ребенку о визите в позитивном ключе, не используйте слова "больно", "укол". Приходите на прием в хорошем настроении, не торопясь.'
        },
        {
          question: 'Используете ли вы седацию для детей?',
          answer: 'Да, для тревожных детей мы предлагаем седацию закисью азота. Это безопасный метод, который помогает ребенку расслабиться во время лечения.'
        }
      ]
    },
    {
      title: 'Цены и оплата',
      icon: 'CreditCard',
      questions: [
        {
          question: 'Входит ли анестезия в стоимость лечения?',
          answer: 'Да, местная анестезия включена в стоимость всех лечебных процедур. Дополнительно оплачивается только седация закисью азота.'
        },
        {
          question: 'Можно ли получить рассрочку?',
          answer: 'Да, мы предоставляем беспроцентную рассрочку на срок до 12 месяцев для лечения стоимостью от 30 000 рублей.'
        },
        {
          question: 'Принимаете ли вы страховку?',
          answer: 'Мы работаем с полисами ДМС ведущих страховых компаний. Также принимаем к оплате сертификаты социальных программ.'
        },
        {
          question: 'Предоставляете ли скидки?',
          answer: 'Да, у нас действуют скидки: семейная скидка 15%, скидка пенсионерам 10%, скидка студентам 5%. Первичная консультация при записи через сайт - бесплатно.'
        }
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
              <a href="/faq" className="text-blue-600 font-medium">FAQ</a>
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
            Часто задаваемые <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">вопросы</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о стоматологическом лечении, 
            процедурах и услугах нашей клиники.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Поиск по вопросам..."
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

      {/* FAQ Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl">Категории</CardTitle>
                  <CardDescription>
                    Выберите интересующую тему
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                        <Icon name={category.icon} className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">{category.title}</span>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3 space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Icon name={category.icon} className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-0 shadow-md rounded-lg overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Нужна помощь?</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Позвонить</CardTitle>
                <CardDescription>
                  Получите консультацию по телефону
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-gray-600 mb-4">Ежедневно с 9:00 до 21:00</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Позвонить сейчас
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Онлайн-чат</CardTitle>
                <CardDescription>
                  Задайте вопрос в чате на сайте
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Отвечаем в течение 5 минут</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Открыть чат
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Записаться</CardTitle>
                <CardDescription>
                  Запишитесь на консультацию
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Первичная консультация бесплатно</p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Записаться онлайн
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ask Question Form */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Не нашли ответ?</h2>
            <p className="text-xl text-gray-600">
              Задайте свой вопрос и мы ответим в течение 24 часов
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Задать вопрос врачу</CardTitle>
              <CardDescription>
                Наши специалисты ответят на любые вопросы о стоматологическом лечении
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Категория вопроса</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Выберите категорию</option>
                  <option>Общие вопросы</option>
                  <option>Лечение и процедуры</option>
                  <option>Имплантация</option>
                  <option>Ортодонтия</option>
                  <option>Детская стоматология</option>
                  <option>Цены и оплата</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваш вопрос *</label>
                <Textarea 
                  placeholder="Подробно опишите ваш вопрос..." 
                  rows={6}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="consent" className="rounded" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Согласен на обработку персональных данных
                </label>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <Icon name="Send" className="w-4 h-4 mr-2" />
                Отправить вопрос
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Мы ответим на ваш вопрос в течение 24 часов
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Самые популярные вопросы</h2>
            <p className="text-xl opacity-90">
              Вопросы, которые задают чаще всего
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white bg-opacity-10 border-0 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 mr-2" />
                  Больно ли лечить зубы?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  Современная анестезия позволяет проводить лечение абсолютно безболезненно.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-0 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 mr-2" />
                  Сколько стоит имплантация?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  Стоимость имплантации от 35 000 рублей в зависимости от системы импланта.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-0 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 mr-2" />
                  Можно ли лечиться в рассрочку?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  Да, мы предоставляем беспроцентную рассрочку на срок до 12 месяцев.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-0 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="w-5 h-5 mr-2" />
                  С какого возраста можно ставить брекеты?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  Оптимальный возраст 12-14 лет, но исправлять прикус можно в любом возрасте.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;