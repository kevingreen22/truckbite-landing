import React from 'react';
import { motion } from 'framer-motion';
import { Download, Printer, Check } from 'lucide-react';
import { MARKETING_KIT } from '../../config/marketingKit';
import { trackEvent } from '../../analytics';

export function MarketingKit() {
    return (
        <section id="marketing-kit" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto rounded-3xl bg-vendor-50 border border-vendor-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="shrink-0 p-5 rounded-2xl bg-white text-vendor-600 shadow-sm border border-vendor-100">
                        <Printer size={40} />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-3">
                        <h2 className="text-3xl font-bold text-gray-900">Spread the word at your truck</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Download our printable marketing materials and post them on or at your truck so
                            customers know where to find you on TruckBite.
                        </p>

                        {MARKETING_KIT.contents.length > 0 && (
                            <ul className="space-y-1 text-left inline-block">
                                {MARKETING_KIT.contents.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-700">
                                        <Check size={16} className="text-vendor-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="pt-2">
                            <a
                                href={MARKETING_KIT.file}
                                download={MARKETING_KIT.downloadName}
                                onClick={() => trackEvent('marketing_kit_download', { file_name: MARKETING_KIT.downloadName })}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-vendor-600 text-white font-semibold shadow-lg transition-all hover:bg-vendor-700 hover:shadow-vendor-600/30"
                            >
                                <Download size={20} />
                                Download the Marketing Kit
                            </a>
                            <p className="mt-3 text-sm text-gray-500">ZIP file, ready to print.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
