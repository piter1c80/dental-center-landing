import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const beforeAfterCases = [
    {
      title: 'Комплексная реабилитация улыбки',
      description: 'Протезирование на имплантах и виниры',
      category: 'Протезирование',
      beforeImage: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      afterImage: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      duration: '6 месяцев',
      doctor: 'Волков А.И.'
    },
    {
      title: 'Исправление прикуса брекетами',
      description: 'Ортодонтическое лечение скученности зубов',
      category: 'Ортодонтия',
      beforeImage: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      afterImage: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      duration: '18 месяцев',
      doctor: 'Смирнов Д.А.'
    },
    {
      title: 'Имплантация передних зубов',
      description: 'Восстановление эстетики фронтальной группы',
      category: 'Имплантация',
      beforeImage: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      afterImage: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      duration: '4 месяца',
      doctor: 'Петрова А.В.'
    },
    {
      title: 'Отбеливание зубов ZOOM 4',
      description: 'Профессиональное отбеливание на 8 тонов',
      category: 'Отбеливание',
      beforeImage: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      afterImage: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      duration: '1 процедура',
      doctor: 'Иванов С.П.'
    },
    {
      title: 'Лечение множественного кариеса',
      description: 'Реставрация 8 зубов композитными материалами',
      category: 'Лечение',
      beforeImage: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      afterImage: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      duration: '3 визита',
      doctor: 'Иванов С.П.'
    },
    {
      title: 'Детская стоматология',
      description: 'Лечение кариеса молочных зубов',
      category: 'Детская стоматология',
      beforeImage: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      afterImage: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      duration: '2 визита',
      doctor: 'Козлова Е.М.'
    }
  ];

  const clinicPhotos = [
    {
      title: 'Ресепшн клиники',
      description: 'Современная зона ожидания',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    },
    {
      title: 'Кабинет терапевта',
      description: 'Оборудование Carl Zeiss',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      title: 'Операционная',
      description: 'Стерильная операционная для имплантации',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    },
    {
      title: 'Детский кабинет',
      description: 'Яркий и уютный кабинет для маленьких пациентов',
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg'
    },
    {
      title: 'Рентген-кабинет',
      description: '3D томограф последнего поколения',
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg'
    },
    {
      title: 'Стерилизационная',
      description: 'Современное оборудование для стерилизации',
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg'
    }
  ];

  const categories = [
    'Все работы',
    'Протезирование',
    'Имплантация',
    'Ортодонтия',
    'Лечение',
    'Отбеливание',
    'Детская стоматология'
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
              <a href="/gallery" className="text-blue-600 font-medium">Галерея</a>
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
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Галерея</span> работ
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Примеры наших работ "до" и "после", фотографии клиники и современного оборудования. 
            Убедитесь в качестве нашей работы собственными глазами.
          </p>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Результаты лечения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Фотографии наших пациентов до и после лечения
            </p>
          </div>

          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((case_, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {case_.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{case_.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{case_.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {case_.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Before/After Images */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">До лечения:</p>
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={case_.beforeImage} 
                          alt="До лечения"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">После лечения:</p>
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={case_.afterImage} 
                          alt="После лечения"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Врач: {case_.doctor}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Eye" className="w-4 h-4 mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша клиника</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современное оборудование и комфортная атмосфера
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicPhotos.map((photo, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{photo.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {photo.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Современное оборудование</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы используем только лучшие технологии для качественного лечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Microscope" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Дентальный микроскоп</CardTitle>
                <CardDescription>
                  Carl Zeiss OPMI pico
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scan" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">3D томограф</CardTitle>
                <CardDescription>
                  Planmeca ProMax 3D
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Лазерная установка</CardTitle>
                <CardDescription>
                  Fotona LightWalker
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">CAD/CAM система</CardTitle>
                <CardDescription>
                  CEREC Primescan
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Виртуальная экскурсия</h2>
          <p className="text-xl mb-8 opacity-90">
            Познакомьтесь с нашей клиникой, не выходя из дома
          </p>
          <div className="bg-white bg-opacity-20 rounded-2xl p-12 mb-8">
            <Icon name="Play" className="w-24 h-24 text-white mx-auto mb-4" />
            <p className="text-lg">360° тур по клинике</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Начать экскурсию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на прием
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы с фотографиями</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши пациенты делятся результатами лечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ЕМ
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена М.</CardTitle>
                    <CardDescription>Имплантация</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg" 
                    alt="Результат лечения"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 italic">
                  "Спасибо огромное доктору Петровой! Имплантация прошла безболезненно, 
                  результат превосходный. Теперь улыбаюсь без стеснения!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    АП
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр П.</CardTitle>
                    <CardDescription>Ортодонтическое лечение</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg" 
                    alt="Результат лечения"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 italic">
                  "18 месяцев лечения брекетами того стоили! Доктор Смирнов - настоящий профессионал. 
                  Прикус исправлен идеально!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Хотите такой же результат?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Запишитесь на консультацию и получите индивидуальный план лечения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Задать вопрос врачу
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;