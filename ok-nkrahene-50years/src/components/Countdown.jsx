import Countdown from "react-countdown";

export default function EventCountdown({ date }) {
  return (
    <div className="text-center py-6">
      <Countdown
        date={date}
        renderer={({
          days,
          hours,
          minutes,
          seconds,
          completed,
        }) => {
          if (completed)
            return (
              <div className="text-2xl font-bold text-[var(--accent)]">
                The celebration is live!
              </div>
            );

          return (
            <div className="flex justify-center gap-6 text-xl">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[var(--gold-light)]">
                  {days}
                </div>
                <div className="text-sm text-[var(--muted)]">Days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[var(--gold-light)]">
                  {hours}
                </div>
                <div className="text-sm text-[var(--muted)]">Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[var(--gold-light)]">
                  {minutes}
                </div>
                <div className="text-sm text-[var(--muted)]">Minutes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[var(--gold-light)]">
                  {seconds}
                </div>
                <div className="text-sm text-[var(--muted)]">Seconds</div>
              </div>
            </div>
          );
        }}
      />
      <p className="text-sm text-[var(--muted)] mt-2">
        Until the 50th Anniversary Celebration
      </p>
    </div>
  );
}
