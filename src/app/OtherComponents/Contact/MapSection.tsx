export default function MapSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Shadow box like screenshot */}
        <div className="bg-white shadow-lg overflow-hidden">

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.695582791272!2d76.81927!3d30.36898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed86ccf24fb9%3A0x7cf442c8ec63cf61!2sQuasmo%20Quality%20Scientific!5e0!3m2!1sen!2sin!4v1707040000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>

        </div>
      </div>
    </section>
  );
}
