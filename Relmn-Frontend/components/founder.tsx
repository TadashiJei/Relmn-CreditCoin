import { Pill } from "./pill"

export function Founder() {
  return (
    <section id="founder" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Pill className="mb-6">FOUNDERS</Pill>
            <h2 className="text-4xl md:text-5xl font-sentient mb-8">
              Meet the <i className="font-light">Co-Founders</i>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Java Jay Bartolome */}
            <div className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(20px_0,calc(100%_-_20px)_0,100%_20px,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,20px_100%,0_calc(100%_-_20px),0_20px)]">
              <div className="aspect-square overflow-hidden rounded-full mb-6 border-2 border-primary/30 mx-auto max-w-[200px]">
                <img
                  src="/images/founder-photo.jpg"
                  alt="Java Jay Bartolome - Co-Founder of Relmn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-sentient mb-2">Java Jay Bartolome</h3>
                <div className="font-mono text-sm text-primary mb-4">Co-Founder & CEO</div>
              </div>

              <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-6">
                Blockchain and fintech entrepreneur with 5 years of experience in digital transformation. From
                Philippines with work experience in Canada and Japan, passionate about connecting underserved
                communities through inclusive financial technology.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#262626]/30 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                  <div className="text-lg font-sentient text-primary mb-1">5+</div>
                  <div className="font-mono text-xs text-foreground/60">Years Experience</div>
                </div>
                <div className="bg-[#262626]/30 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                  <div className="text-lg font-sentient text-primary mb-1">Global</div>
                  <div className="font-mono text-xs text-foreground/60">Philippines, Canada & Japan</div>
                </div>
              </div>
            </div>
            {/* Xian Hui Cheng
            <div className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(20px_0,calc(100%_-_20px)_0,100%_20px,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,20px_100%,0_calc(100%_-_20px),0_20px)]">
              <div className="aspect-square overflow-hidden rounded-full mb-6 border-2 border-primary/30 mx-auto max-w-[200px]">
                <img
                  src="/images/cofounder-photo.jpg"
                  alt="Xian Hui Cheng - Co-Founder of Relmn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-sentient mb-2">Xian Hui Cheng</h3>
                <div className="font-mono text-sm text-primary mb-4">Co-Founder & CTO</div>
              </div>

              <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-6">
                Software Engineer with expertise in UI/UX design and 4 years of software development experience.
                Specializes in creating intuitive user experiences and scalable technical architectures for fintech and
                blockchain applications.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#262626]/30 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                  <div className="text-lg font-sentient text-primary mb-1">4+</div>
                  <div className="font-mono text-xs text-foreground/60">Years Experience</div>
                </div>
                <div className="bg-[#262626]/30 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                  <div className="text-lg font-sentient text-primary mb-1">UI/UX</div>
                  <div className="font-mono text-xs text-foreground/60">Expert Designer</div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
      
    </section>
  )
}
