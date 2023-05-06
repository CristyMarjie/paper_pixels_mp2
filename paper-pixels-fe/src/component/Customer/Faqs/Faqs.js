import React from 'react';
import FaqBg from './FaqBg';
import FaqDetails from './FaqDetails';

function Faqs() {
  const items = [
    {
      question: 'How can you produce the best print effect?',
      answer:
        'It is recommended that you provide the image with transparent PNG format, 300 dpi, and with no image noise.',
    },
    {
      question: 'How do you make vinyl prints last longer?',
      answer:
        'Wash clothes inside out. This will give a layer of protection from other clothes. Do not use bleach. Heat from the dryer will cause shrinkage. Best to hang it dry.',
    },
    {
      question: 'What mode of payment do you accept?',
      answer:
        'Bank deposit, cheque deposit, maya, GCash, debit or credit card payments.',
    },
    {
      question: 'How do i go about getting an estimate from you?',
      answer:
        'The best way to ensure that we get all the information necessary to do an accurate quote is to give us a call.',
    },
    {
      question: 'How long will it take for you to complete my order?',
      answer:
        'Every job is different. Some jobs can be produced in minutes while some may take several days to complete. Let us know when you need your job completed and we willl let you know if it can be done. We go to great lengths to meet even your most demanding timelines.',
    },
    {
      question:
        'What is the best file format for submitting a document for printing?',
      answer:
        'PDF is generally the preferred file format for submitting a document for printing as it works with virtually all professional printing and digital output devices.',
    },
    {
      question: 'What does "camera ready" mean?',
      answer:
        'In the digital age of printing, it means that an image file submitted for printing is ready to be transferred to the printing plates without any alterations.',
    },
    {
      question: 'Is white considered a printing color?',
      answer:
        'No. White is not generally considered a printing color as typically the paper itself will be white. If a colored paper (something other than white) is chosen, then white becomes a printing color if any text or graphics require it.',
    },
    {
      question: 'What are the most common sizes for catalogs and booklets?',
      answer:
        'Standard sizes for catalogs and booklets are 5 1/2" x 8 1/2", 8 1/2" x 11", 8 1/2" x 11 and 11" x 17".',
    },
    {
      question: 'What are the most common sizes for brochures?',
      answer:
        'Common brochure sizes are 8 1/2" x 11", 8 1/2" x14" and 11" x17".',
    },
    {
      question: 'What are the standard sizes for postcards?',
      answer:
        'Postcards are found in three common sizes: 4" x 6", 5" x 7" and 5 1/2" x 8 1/2".',
    },
    {
      question: 'What are the most popular sizes for personalized notepads?',
      answer:
        'The three most popular sizes for personalized notepads are 4" x 6", 5 1/2" x 8 1/2" and 8 1/2" x 11".',
    },
    {
      question: 'What are the most popular sizes for sticky notepads?',
      answer:
        'There are four popular sizes for sticky notes: 3" x 3", 3" x 4", 3" x 5" and 4" x 6".',
    },
  ];

  return (
    <>
      
      <section id="faq" className="container">
        <div className="row py-3">
          <FaqBg />
        </div>
        <div className="row">
          <div className="col-12 text-right">
            <h2 className="display-6 text-blue">
              <strong>
                <br />
                Frequently Asked Questions
              </strong>
            </h2>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-lg-12">
            <FaqDetails items={items} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
