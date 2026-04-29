import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/Desktop1/svg-c5t4f7i2bq";
import imgBackgroundWallpaper1 from "../imports/Desktop1/ee6a65d51bdf0d6a91c02a9decfc3ee506a06286.png";
import imgThumbUp1 from "../imports/Desktop1/ed05eb16b5c28444006b16f68c24555a9f950d0c.png";
import imgEfef1 from "../imports/Desktop1/d1a8919733a4ece8a9f36a357f650b55c2eafbb0.png";
import imgHeart1 from "../imports/Desktop1/c6f442f225dbd69b28edde784b09bbd7fca527ce.png";
import imgIPhone16Pro from "../imports/Desktop1/5a898560178bceebd050c6e6e03f973517bf75ef.png";
import imgMacBook13 from "../imports/Desktop1/3d11d91f5ee7e81f94f84a37ad197ca20fc3ae69.png";

function Frame6() {
  return (
    <div className="absolute h-[1221px] inset-x-0 top-0 w-full">
      <motion.div
        className="absolute h-[1024px] inset-x-0 top-[-1px] w-full"
        data-name="background wallpaper 1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundWallpaper1} />
      </motion.div>
      <motion.div
        className="absolute bg-white h-[687px] inset-x-0 top-[812px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
}

function Group2() {
  return (
    <motion.div
      className="absolute h-[91px] left-[calc(50%-263px)] top-[331px] w-[100px]"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <div className="absolute inset-[-1.1%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 92">
          <g id="Group 1321321015">
            <motion.path
              d={svgPaths.p3b05ce88}
              id="Vector 1"
              stroke="var(--stroke-0, #ACF694)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.circle
              cx="92"
              cy="84"
              fill="var(--fill-0, #ACF694)"
              id="Ellipse 1"
              r="8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

function Group() {
  return (
    <motion.div
      className="h-[32.676px] relative shrink-0 w-[13.424px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4239 32.6763">
        <g id="Group 1321321013">
          <path d={svgPaths.p27d4c800} fill="var(--fill-0, #ACF694)" id="Vector" />
          <path d={svgPaths.p6774d00} fill="var(--fill-0, #ACF694)" id="Vector_2" />
          <path d={svgPaths.p2584ad00} fill="var(--fill-0, #ACF694)" id="Vector_3" />
          <path d={svgPaths.p8024c80} fill="var(--fill-0, #ACF694)" id="Vector_4" />
        </g>
      </svg>
    </motion.div>
  );
}

function Frame() {
  return (
    <motion.div
      className="content-stretch flex gap-[5.941px] items-center relative shrink-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      style={{ cursor: 'pointer' }}
    >
      <img src="/jaga-icon.png" alt="Jagaportfolio Icon" className="h-[32.676px] w-auto relative shrink-0" />
      <p className="font-['Anybody:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#acf694] text-[23.766px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jaga
      </p>
    </motion.div>
  );
}

function Frame1() {
  return (
    <motion.div
      className="bg-[#acf694] h-full relative rounded-[57.186px] shrink-0 w-[112.33px]"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(172, 246, 148, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: 'pointer' }}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8.169px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16.339px] text-black whitespace-nowrap">Home</p>
        </div>
      </div>
    </motion.div>
  );
}

function Frame2() {
  return (
    <motion.div
      className="bg-[#217517] h-full relative shrink-0 w-[112.33px]"
      whileHover={{ scale: 1.05, backgroundColor: "#2a9f04" }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: 'pointer' }}
      onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8.169px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16.339px] text-white whitespace-nowrap">Projects</p>
        </div>
      </div>
    </motion.div>
  );
}

function Frame3() {
  return (
    <motion.div
      className="bg-[#217717] h-[32.678px] relative rounded-[81.694px] shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.817px] border-solid border-white inset-0 pointer-events-none rounded-[81.694px]" />
    </motion.div>
  );
}

function Group1() {
  return (
    <motion.div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      whileHover={{ scale: 1.1, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: 'pointer' }}
      onClick={() => window.open("https://drive.google.com/file/d/14vvkKdx2svEsXDZ9hxPCRMWNP3qKZDZs/view?usp=sharing", "_blank")}
    >
      <div className="bg-gradient-to-b col-1 from-[#2a9f04] h-[32.678px] ml-0 mt-0 rounded-[32.037px] row-1 to-[#b0f29a] to-[59.564%] w-[102.518px]" />
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[20.83px] mt-[6.13px] not-italic relative row-1 text-[16.018px] text-black w-[61.271px]">Resume</p>
    </motion.div>
  );
}

function Frame7() {
  return (
    <motion.div
      className="absolute content-stretch flex justify-between items-center left-[calc(50%-662px)] w-[1324px] top-[27.66px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Frame />
      <Frame3 />
      <Group1 />
    </motion.div>
  );
}

function SkillIconsGmailLight() {
  return (
    <motion.div
      className="overflow-clip relative shrink-0 size-[27.382px]"
      data-name="skill-icons:gmail-light"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      style={{ cursor: 'pointer' }}
      onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jagaadya@gmail.com', '_blank')}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3818 27.3818">
        <g id="Group">
          <path d={svgPaths.p2b560500} fill="var(--fill-0, #F4F2ED)" id="Vector" />
          <path d={svgPaths.p18f80100} fill="var(--fill-0, #4285F4)" id="Vector_2" />
          <path d={svgPaths.p3bee3380} fill="var(--fill-0, #34A853)" id="Vector_3" />
          <path d={svgPaths.p23848400} fill="var(--fill-0, #FBBC04)" id="Vector_4" />
          <path d={svgPaths.p1a0dad00} fill="var(--fill-0, #EA4335)" id="Vector_5" />
          <path d={svgPaths.p15fdbd00} fill="var(--fill-0, #C5221F)" id="Vector_6" />
        </g>
      </svg>
    </motion.div>
  );
}

function SkillIconsLinkedin() {
  return (
    <motion.div
      className="overflow-clip relative shrink-0 size-[27.382px]"
      data-name="skill-icons:linkedin"
      whileHover={{ scale: 1.2, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      style={{ cursor: 'pointer' }}
      onClick={() => window.open('https://www.linkedin.com/in/jaga9787/', '_blank')}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3818 27.3818">
        <g id="Group">
          <path d={svgPaths.p2b560500} fill="var(--fill-0, #0A66C2)" id="Vector" />
          <path d={svgPaths.p33677c0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </motion.div>
  );
}

function Frame5() {
  return (
    <motion.div
      className="fixed z-50 bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[22.818px] items-start right-0 bottom-10 px-[17.114px] py-[11.409px] rounded-bl-[12px] rounded-tl-[12px]"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      whileHover={{ x: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
    >
      <SkillIconsGmailLight />
      <SkillIconsLinkedin />
    </motion.div>
  );
}

function Frame4({ onOpenPdf }: { onOpenPdf: () => void }) {
  return (
    <motion.div
      className="h-[486px] relative shrink-0 w-[647px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      style={{ cursor: 'pointer' }}
      onClick={onOpenPdf}
    >
      <div className="absolute h-[486px] left-0 pointer-events-none rounded-[24px] top-0 w-[647px]" data-name="iPhone 16 Pro">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgIPhone16Pro} />
        <div aria-hidden="true" className="absolute border-[#aff19a] border-[0.4px] border-solid inset-[-0.2px] rounded-[24.2px] shadow-[3px_4px_214px_-20px_rgba(255,255,255,0.15)]" />
      </div>
      <motion.p
        className="absolute font-['Anybody:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-293.5px)] text-[32px] text-white top-[29px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        MedLink
      </motion.p>
      <motion.p
        className="absolute font-['Anybody:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-293.5px)] text-[18px] text-white top-[450px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Healthcare App — Connecting Patients, Doctors and Pharmacies
      </motion.p>
    </motion.div>
  );
}

function PdfModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-[#1a1a1a] rounded-2xl w-full max-w-5xl h-[85vh] overflow-hidden border border-[#acf694]/20"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors border border-white/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="w-full h-full">
              <iframe
                src="/MediLink.pdf#toolbar=0"
                className="w-full h-full border-none"
                title="MediLink PDF"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Frame8({ onOpenPdf }: { onOpenPdf: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 onOpenPdf={onOpenPdf} />
      <motion.div
        className="h-[486px] relative rounded-[24px] shrink-0 w-[661px]"
        data-name="MacBook #13"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        style={{ cursor: 'pointer' }}
        onClick={() => window.open('https://drive.google.com/file/d/1Jg8Rp6NrTCFYlLJYwAgETTa7prU8CjCI/view?usp=sharing', '_blank')}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full pointer-events-none" src={imgMacBook13} />
        <div aria-hidden="true" className="absolute border-[#b2f19d] border-[0.4px] border-solid inset-[-0.2px] rounded-[24.2px] shadow-[3px_4px_214px_-20px_rgba(255,255,255,0.15)] pointer-events-none" />
      </motion.div>
    </div>
  );
}

function Frame9({ onOpenPdf }: { onOpenPdf: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <motion.p
        className="font-['Anybody:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#020822] text-[32px] w-full"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03, color: "#217517" }}
      >
        Projects
      </motion.p>
      <Frame8 onOpenPdf={onOpenPdf} />
    </div>
  );
}

function Frame10({ onOpenPdf }: { onOpenPdf: () => void }) {
  return (
    <div id="projects-section" className="absolute content-stretch flex flex-col gap-[42px] items-center left-[calc(50%-662px)] top-[830px] w-[1324px]">
      <Frame9 onOpenPdf={onOpenPdf} />
      <motion.p
        className="font-['Anybody:Regular',sans-serif] font-normal leading-[normal] opacity-90 relative shrink-0 text-[#020822] text-[24px] text-center w-full"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02, opacity: 1 }}
      >
        Thanks for being here!!! — now let's design experiences that matter.
      </motion.p>
    </div>
  );
}

function Group3({ onOpenPdf }: { onOpenPdf: () => void }) {
  return (
    <div className="absolute contents left-[58px] top-[830px]">
      <Frame10 onOpenPdf={onOpenPdf} />
      <motion.p
        className="absolute font-['Anybody:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%+41px)] text-[32px] text-white top-[916px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05, color: "#acf694" }}
        onClick={() => window.open('https://drive.google.com/file/d/1Jg8Rp6NrTCFYlLJYwAgETTa7prU8CjCI/view?usp=sharing', '_blank')}
      >
        Resilience
      </motion.p>
      <motion.p
        className="absolute font-['Anybody:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%+41px)] text-[17px] text-white top-[1337px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.03, opacity: 0.8 }}
        onClick={() => window.open('https://drive.google.com/file/d/1Jg8Rp6NrTCFYlLJYwAgETTa7prU8CjCI/view?usp=sharing', '_blank')}
      >
        Proactive platform ensuring system reliability and failure prevention
      </motion.p>
    </div>
  );
}

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1468\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.3219e-14 -73.4 72 4.7223e-14 720 734)\\'><stop stop-color=\\'rgba(40,167,69,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(30,125,52,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(20,84,35,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(15,63,26,1)\\' offset=\\'0.625\\'/><stop stop-color=\\'rgba(10,42,17,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(5,21,9,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(3,10,4,1)\\' offset=\\'0.9375\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} data-name="Desktop - 1">
      <Frame6 />
      <motion.p
        className="absolute font-['Anybody:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-662px)] text-[165.783px] text-white top-[119px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.02, letterSpacing: "0.02em" }}
      >
        UI/UX DESIGNER
      </motion.p>
      <motion.p
        className="absolute font-['Anybody:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-662px)] text-[32px] text-white top-[314px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.05, color: "#acf694" }}
      >
        About Me!
      </motion.p>
      <motion.p
        className="absolute font-['Anybody:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%+216px)] text-[32px] text-white top-[379px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.05, color: "#acf694" }}
      >
        it began with curiosity.
      </motion.p>
      <Group2 />
      <motion.div
        className="absolute font-['Anybody:Regular',sans-serif] font-normal h-[136px] leading-[0] left-[calc(50%-662px)] text-[16px] text-white top-[365px] w-[452px]"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ opacity: 1, x: 5 }}
      >
        <p className="leading-[21px] mb-0">{`I'm Jagatheeshwaran, a UX designer who loves improving the usability, accessibility, and enjoyability of digital consumer products. I have always been interested in the intersection of design, people, and technology, and wish to make my impact on the world through compelling user experience design.`}</p>
        <p className="leading-[21px]">​</p>
      </motion.div>
      <motion.div
        className="absolute left-[calc(50%+122px)] size-[58px] top-[393px]"
        data-name="thumb-up 1"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbUp1} />
      </motion.div>
      <Frame7 />
      <motion.div
        className="-translate-x-1/2 absolute h-[1019px] left-[calc(50%-9.48px)] top-[74px] w-[833.038px]"
        data-name="efef 1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0]
        }}
        transition={{
          opacity: { duration: 1.2, delay: 0.2 },
          scale: { duration: 1.2, delay: 0.2 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEfef1} />
      </motion.div>
      <motion.div
        className="absolute left-[calc(50%-399px)] size-[66px] top-[605px]"
        data-name="heart 1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.15, 1],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          scale: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 1.6
          }
        }}
        whileHover={{ scale: 1.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeart1} />
      </motion.div>
      <motion.div
        className="absolute font-['Anybody:Regular',sans-serif] font-normal leading-[0] left-[calc(50%+269px)] text-[16px] text-white top-[428px] w-[393px]"
        style={{ fontVariationSettings: "'wdth' 100", cursor: 'pointer' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        whileHover={{ opacity: 1, x: -5 }}
      >
        <p className="leading-[21px] mb-0">I first came across UI/UX during my fashion studies but didn't think much of it—until a small opportunity changed everything. When my brother asked me to design his product's UI, curiosity turned into passion. Seeing real users interact with something I created gave me a sense of purpose I had never experienced before.</p>
        <p className="leading-[21px]">That moment shifted my path. I started exploring UI/UX deeply—learning, experimenting, and growing every day.</p>
      </motion.div>
      <Frame5 />
      <Group3 onOpenPdf={() => setIsPdfModalOpen(true)} />
      <PdfModal isOpen={isPdfModalOpen} onClose={() => setIsPdfModalOpen(false)} />
    </div>
  );
}
