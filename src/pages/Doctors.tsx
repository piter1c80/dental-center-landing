import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Doctors = () => {
  const doctors = [
    {
      name: 'Иванов Сергей Петрович',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      education: 'МГМСУ им. А.И. Евдокимова',
      specializations: ['Эндодонтия', 'Реставрация', 'Микроскопия'],
      achievements: ['Кандидат медицинских наук', 'Сертификат Европейского эндодонтического общества'],
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      description: 'Специализируется на сложном эндодонтическом лечении с использованием микроскопа'
    },
    {
      name: 'Петрова Анна Владимировна',
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет опыта',
      education: 'СПбГМУ им. И.П. Павлова',
      specializations: ['Имплантология', 'Костная пластика', 'Синус-лифтинг'],
      achievements: ['Диплом Nobel Biocare', 'Сертификат Straumann'],
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      description: 'Ведущий специалист по имплантации и костной пластике'
    },
    {
      name: 'Смирнов Дмитрий Алексеевич',
      specialty: 'Врач-ортодонт',
      experience: '10 лет опыта',
      education: 'РУДН',
      specializations: ['Брекет-системы', 'Элайнеры', 'Детская ортодонтия'],
      achievements: ['Сертификат Invisalign', 'Диплом Damon System'],
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      description: 'Эксперт по исправлению прикуса у детей и взрослых'
    },
    {
      name: 'Козлова Елена Михайловна',
      specialty: 'Детский стоматолог',
      experience: '8 лет опыта',
      education: 'МГМСУ им. А.И. Евдокимова',
      specializations: ['Детская стоматология', 'Профилактика', 'Седация'],
      achievements: ['Сертификат по детской психологии', 'Диплом по седации N2O'],
      image: '/img/65fc899a-a998-4b92-ad6a-560068fc2d95.jpg',
      description: 'Специалист по работе с детьми, использует игровые методики'
    },
    {
      name: 'Волков Александр Игоревич',
      specialty: 'Стоматолог-ортопед',
      experience: '14 лет опыта',
      education: 'МГМСУ им. А.И. Евдокимова',
      specializations: ['Протезирование', 'Виниры', 'CAD/CAM технологии'],
      achievements: ['Сертификат CEREC', 'Диплом по эстетической стоматологии'],
      image: '/img/6d1f252f-7592-44be-80ef-5d45749c817b.jpg',
      description: 'Мастер эстетического протезирования и реставрации улыбки'
    },
    {
      name: 'Морозова Ольга Сергеевна',
      specialty: 'Врач-пародонтолог',
      experience: '11 лет опыта',
      education: 'СПбГМУ им. И.П. Павлова',
      specializations: ['Пародонтология', 'Гигиена', 'Лазерная терапия'],
      achievements: ['Сертификат по лазерной терапии', 'Диплом Vector-терапии'],
      image: '/img/72254edf-5b1a-4045-bdd8-f89f771e1508.jpg',
      description: 'Специалист по лечению заболеваний десен и профилактике'
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
              <a href="/doctors" className="text-blue-600 font-medium">Врачи</a>
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
            Наши <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">врачи</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Команда высококвалифицированных специалистов с многолетним опытом работы 
            и постоянным повышением квалификации.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={doctor.image} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-3xl">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl mb-2">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium text-base mb-2">
                    {doctor.specialty}
                  </CardDescription>
                  <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                    {doctor.experience}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{doctor.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Образование:</h4>
                    <p className="text-gray-600 text-sm">{doctor.education}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Специализации:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Достижения:</h4>
                    <ul className="space-y-1">
                      {doctor.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <Icon name="Award" className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    Записаться к врачу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-xl text-gray-600">Цифры, которые говорят о нашем профессионализме</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60+</div>
              <div className="text-gray-600">лет суммарного опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">15+</div>
              <div className="text-gray-600">международных сертификатов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">8000+</div>
              <div className="text-gray-600">успешных операций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">98%</div>
              <div className="text-gray-600">довольных пациентов</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;