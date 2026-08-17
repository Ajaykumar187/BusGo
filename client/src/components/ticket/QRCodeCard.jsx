function QRCodeCard({ qr }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

      <h2 className="text-2xl font-bold mb-5">
        Ticket QR Code
      </h2>

      <img
        src={qr}
        alt="QR Code"
        className="mx-auto w-52"
      />

      <p className="text-gray-500 mt-4">
        Scan this QR code to verify your ticket.
      </p>

    </div>
  );
}

export default QRCodeCard;