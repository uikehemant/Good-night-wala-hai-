document.addEventListener('DOMContentLoaded', function() {
    // यह सुनिश्चित करता है कि HTML पूरी तरह से लोड हो गया है

    // भेजने वाले का नाम सेट करें (आप इसे सीधे HTML में भी लिख सकते हैं)
    // अगर आप चाहें तो JavaScript के माध्यम से भी सेट कर सकते हैं:
    // document.getElementById('senderName').textContent = "आपका नाम"; 
    // लेकिन मैंने HTML में प्लेसहोल्डर दिया है ताकि आप सीधे वहीं बदल सकें।

    const shareButton = document.getElementById('whatsapp-share-button');

    shareButton.addEventListener('click', function() {
        // यह GitHub पेज का वर्तमान URL लेगा
        const pageUrl = window.location.href;
        const pageTitle = document.title; // पेज का टाइटल
        
        // संदेश जो शेयर किया जाएगा
        let message = `नमस्ते! न्यू विद्या कोचिंग सेंटर के बारे में यहाँ और जानें:\n`;
        message += `कोचिंग: ${pageTitle}\n`;
        message += `सत्र: 2025-26\n`;
        message += `प्रवेश प्रारंभ!\n\n`;
        message += `अधिक जानकारी के लिए लिंक पर क्लिक करें: ${pageUrl}`;

        // WhatsApp शेयर लिंक
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

        // नए टैब में WhatsApp लिंक खोलें
        window.open(whatsappUrl, '_blank');
    });
});