import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function DataImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const data = [
    {
      metric: 'Emotional Stability',
      "Duck's Dream": 83,
      'KKEBI': 79,
    },
    {
      metric: 'Anxiety Reduction',
      "Duck's Dream": 78,
      'KKEBI': 75,
    },
    {
      metric: 'Stress Reduction',
      "Duck's Dream": 65,
      'KKEBI': 70,
    },
    {
      metric: 'User Satisfaction',
      "Duck's Dream": 91,
      'KKEBI': 88,
    },
  ];

  return (
    <section id="research" ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Measured Impact,
            <br />
            <span className="text-[#00BF7F]">Real Change.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-lg"
        >
          {/* Chart */}
          <div className="mb-12">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="metric" 
                  stroke="#64748b"
                  tick={{ fill: '#64748b' }}
                />
                <YAxis 
                  stroke="#64748b"
                  tick={{ fill: '#64748b' }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    color: '#1e293b'
                  }}
                />
                <Legend 
                  wrapperStyle={{ color: '#64748b' }}
                />
                <Bar dataKey="Duck's Dream" fill="#16a34a" radius={[8, 8, 0, 0]} />
                <Bar dataKey="KKEBI" fill="#9333ea" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Comparison Grid */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 text-slate-600 font-semibold">Metric</th>
                  <th className="text-center py-4 px-6 text-[#00BF7F] font-semibold">Duck's Dream</th>
                  <th className="text-center py-4 px-6 text-purple-600 font-semibold">KKEBI</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-4 px-6 text-slate-900 font-medium">{row.metric}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-2xl font-bold text-[#00BF7F]">{row["Duck's Dream"]}%</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-2xl font-bold text-purple-600">{row['KKEBI']}%</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Clinical validation data from independent 12-week study | Metrics measured through standardized psychological assessments
          </p>
        </motion.div>
      </div>
    </section>
  );
}