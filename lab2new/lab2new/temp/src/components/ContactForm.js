// File: src/components/ContactForm.js
export default function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Book Your Table</h2>
      <form>
        <div className="form-row">
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Your Email *" required />
          <select required>
            <option value="">Select a Service</option>
            <option value="dine">Dine In</option>
            <option value="takeaway">Take Away</option>
          </select>
        </div>
        <textarea
          placeholder="Please write your comment"
          rows="4"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
