import React from 'react';
import EventCard from '../ui/EventCard';

export default function Events() {
  return (
    <div className="bg-white w-full min-h-fit p-10">
      <h1 className="text-3xl font-bold text-[#070758] text-center mb-3">What we do?</h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <EventCard
          name="RMIT Experience Day 2024"
          date="Sunday, 1st December 2024"
          location="RMIT Saigon South Campus"
          image="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/482101925_607654845441617_2965204981841006671_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFfQVPHR3xPN3YdJqztpyiJaYpT4De0ksNpilPgN7SSw4As6PvkFDuIHWX_wMFxIkJ3xARoFYc0LCwYDjVGW9UT&_nc_ohc=onZRTiWWPLwQ7kNvwEC2dls&_nc_oc=AdnUWmeONNvAaEcEbad60wbPb0feosf4qSlcTp-KEDLHMqE5fIcE7qXU3opdghfNGns&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=aGqa8Y5bBwTv94g3F_1mrw&oh=00_AfLyKXNPQ01fcfTRiQlOML5vc1h3XrwOgBuG9am2HrAoRQ&oe=6844C508"
          link="https://www.facebook.com/share/p/1Bw5HrQ1Ye/"
        />

        <EventCard
          name="High School Tour"
          date=""
          location="RMIT Saigon South Campus"
          image="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/487769959_626692320204536_2059448381143493723_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEj3n0QtjehJz0TJvrSt6SXDjPuV8uoY5QOM-5Xy6hjlNIh7aMe2JdXMogilI5vBcwCWkdhsXU8C0QRze6Pffx4&_nc_ohc=f89KatSgPEcQ7kNvwEaRmUf&_nc_oc=AdkKwD-u9mZYX-N1EB3cFEEtLToUrco793GayQazhMa2wKj8t_3cxEdhNbiAGoD5SxQ&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=MM8Zd6gHaU-mdZ4BsJB3MA&oh=00_AfLVxdC8GlFhTXc0bTYBC3OsVQyjH_MkxzSmI_reAAV0Mw&oe=6844B7C2"
          link="https://example.com/ai-fair"
        />

        <EventCard
          name="Daily Campus Tours"
          date="Every Monday to Saturday"
          location="RMIT Saigon South Campus"
          image="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/485768231_619802210893547_5584430581528428479_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGq3upfI9D-tH8dw0kSq2lCWvoNINz-UIpa-g0g3P5QikgbK3LSME-PBgKzJ7L_6ZuODmls082FJJEyq_JEZuAI&_nc_ohc=nH0oKM-cPIUQ7kNvwGnKoYg&_nc_oc=AdlsQkbud54xcYSNVK2a-eMKygQX650j30Uvpesoqcyi6ZDORnWbg2TnQw1KFUpCyGU&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=by8GCrBEEdUGsfsxIDBBJg&oh=00_AfKscWTRriGqytR1-sED15gW1P0iv08pCwfoaNoL17aC0g&oe=6844B09D"
          link="https://example.com/design-thinking"
        />
      </div>
    </div>
  );
}
