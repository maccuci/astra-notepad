import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure.input(z.object({ userId: z.string().nullish() }))
    .query(
      ({ ctx }) => {
        return ctx.prisma.topic.findMany({
          where: {
            userId: ctx.session.user.id,
          },
        });
      },
    ),

  create: protectedProcedure.input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.topic.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),

  delete: protectedProcedure.input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
        return ctx.prisma.topic.delete({
            where: {
                id: input.id
            }
        })
    }),
});